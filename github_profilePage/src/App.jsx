import React, { useState } from "react";
import "./App.css";
import Body from "./body";
import SignIn from "./SignIn";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

function App() {
  const [owner, setOwner] = useState("");

  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });
  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    const token = import.meta.env.VITE_TOKEN;
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
  //join the authLink created to the httplink to make a uri
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
  //the query to be passed contains a variable, "owner" and the type is set to String, the var is passed in the useQuery hook.
  //we also want to fetch the basic data for the Body component before it renders.
  const repoOwner_details = gql`
    query ($owner: String!) {
      repositoryOwner(login: $owner) {
        login
        ... on User {
          name
          avatarUrl
          location
          twitterUsername
          starredRepositories {
            totalCount
          }
          followers {
            totalCount
          }
          following {
            totalCount
          }
          status {
            message
          }
          organizations(first: 2) {
            nodes {
              name
              avatarUrl
            }
          }
          repositories {
            totalCount
          }
          pinnedItems(first: 6) {
            nodes {
              ... on Repository {
                name
                url
                isPrivate
                description
                primaryLanguage {
                  name
                  color
                }
                forkCount
                isFork
                stargazerCount
              }
            }
          }
          contributionsCollection {
            contributionYears
          }
        }
      }
    }
  `;

  const RepoOwner = () => {
    //the variable owner is passed here.
    const { loading, error, data } = useQuery(repoOwner_details, {
      variables: { owner },
    });
    //handleChange function is passed as a prop to Body to be called so the owner state can be updated in this component
    const handleChange = (e, value) => {
      e.preventDefault();
      setOwner(value);
    };
    if (error && owner) console.log(error); //return <p>Error</p>;
    //loading = {owner && loading} => this is because loading is set to true as it still fecthes result when owner state is empty,
    //adding owner && makes it truthy only when both are satisfied.
    return (
      <>
        {data?.repositoryOwner ? (
          <Body {...data.repositoryOwner} owner={owner} />
        ) : (
          <SignIn handleChange={handleChange} loading={owner && loading} />
        )}
      </>
    );
  };
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <RepoOwner />
      </div>
    </ApolloProvider>
  );
}

export default App;

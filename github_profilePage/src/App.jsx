import react from "react";
import React from "react";
import "./App.css";
// import Body from "./body";
import SignIn from "./SignIn";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

function App() {
  return (
    <div className="App">
      {/* <Body /> */}
      <SignIn />
    </div>
  );
}

export default App;

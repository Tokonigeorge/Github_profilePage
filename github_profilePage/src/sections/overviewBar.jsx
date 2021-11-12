import React from "react";
import RepoCard from "../components/RepoCard";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const OverviewBar = ({ pinnedItems }) => {
  return (
    <div className="ml-4 md:ml-6 md:pr-6 lg:pr-8 mt-5 pr-4">
      <div className="flex justify-between items-center">
        <p className="text-navIcon">Pinned</p>
        <a href="#" className="text-gray-200 text-opacity-60 text-sm">
          Customize your pins
        </a>
      </div>
      <DragDropContext>
        <Droppable droppableId="pinnedItems">
          {(provided) => (
            <div
              className={`flex-auto grid grid-cols-1 ${
                pinnedItems?.nodes.length > 1
                  ? "md:grid-cols-2"
                  : "md:grid-cols-1"
              } gap-5 mt-2`}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {pinnedItems?.nodes.map((i, indx) => (
                <RepoCard
                  key={indx}
                  name={i.name}
                  isPrivate={i.isPrivate}
                  des={i.description}
                  forkCount={i.forkCount}
                  isFork={i.isFork}
                  stargazerCount={i.stargazerCount}
                  language={i.primaryLanguage}
                />
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default OverviewBar;

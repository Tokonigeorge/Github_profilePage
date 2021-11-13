import React, { useState } from "react";
import RepoCard from "../components/RepoCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const OverviewBar = ({ pinnedItems }) => {
  const [position, setPosition] = useState(pinnedItems?.nodes);
  const handleDrag = (result) => {
    if (!result.destination) return;
    const items = Array.from(position);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPosition(items);
  };
  return (
    <div className="ml-4 md:ml-6 md:pr-6 lg:pr-8 mt-5 pr-4">
      <div className="flex justify-between items-center">
        <p className="text-navIcon">Pinned</p>
        <a href="#" className="text-gray-200 text-opacity-60 text-sm">
          Customize your pins
        </a>
      </div>
      <DragDropContext onDragEnd={handleDrag}>
        <Droppable droppableId="pinnedItems">
          {(provided) => {
            return (
              <div
                className={`flex-auto grid grid-cols-1 ${
                  pinnedItems?.nodes.length > 1
                    ? "md:grid-cols-2"
                    : "md:grid-cols-1"
                } gap-5 mt-2`}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {position?.map((i, indx) => {
                  return (
                    <Draggable
                      key={`${indx}`}
                      draggableId={`${indx}`}
                      index={indx}
                    >
                      {(provided) => {
                        return (
                          <RepoCard
                            name={i.name}
                            isPrivate={i.isPrivate}
                            des={i.description}
                            forkCount={i.forkCount}
                            isFork={i.isFork}
                            stargazerCount={i.stargazerCount}
                            language={i.primaryLanguage}
                            provided={provided}
                            _ref={provided.innerRef}
                          />
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default OverviewBar;

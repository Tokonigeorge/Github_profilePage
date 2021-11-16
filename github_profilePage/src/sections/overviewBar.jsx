import React, { useState } from "react";
import RepoCard from "../components/RepoCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const OverviewBar = ({ pinnedItems }) => {
  const [position, setPosition] = useState(pinnedItems?.nodes);
  const [disable, setDisable] = useState(true);

  const handleDisable = (bool) => {
    setDisable(bool);
  };

  const handleDrag = (result) => {
    const { destination, source, draggableId } = result;
    //if the drag is beyond the destination return and if the destination is equal to the source, there is nothing to be done, otherwise:
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    //create an array out of the previous
    const items = Array.from(position);
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);

    setPosition(items);
  };
  return (
    <div className="ml-4 md:ml-6 md:pr-6 lg:pr-8 mt-5 pr-4 lg2:pr-16">
      <div className="flex justify-between items-center">
        <p className="text-navIcon">Pinned</p>
        <a
          href="#"
          className="text-gray-200 hover:text-blue-400 text-opacity-60 text-sm font-light"
        >
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
                      isDragDisabled={disable}
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
                            url={i.url}
                            handleDisable={handleDisable}
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

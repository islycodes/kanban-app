import React from "react";
import Item from "./Item";
import { Droppable } from "react-beautiful-dnd";

// TypeScript only
interface ColumnProps {
  list: string[];
}

const Column: React.FC<ColumnProps> = ({ list }) => {
  return (
    <Droppable droppableId="col-1">
      {(provided) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {list.map((text, index) => (
            <Item key={text} text={text} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Column;

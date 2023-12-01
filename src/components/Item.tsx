import React from "react";
import { Draggable } from "react-beautiful-dnd";

// TypeScript only
interface ItemProps {
  text: string;
  index: number;
}

// ": React.FC<ItemProps>" is TypeScript only
// src/components/Item.tsx

const Item: React.FC<ItemProps> = ({ text, index }) => {
  return (
    <Draggable draggableId={text} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {text}
        </div>
      )}
    </Draggable>
  );
};
export default Item;

import Column from "../components/Column";
import { DragDropContext } from "react-beautiful-dnd";

export function Dashboard() {
  const list = ["a", "b", "c"];
  const onDragEnd = (result: any) => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          margin: "24px auto",
          width: "80%",
          gap: "8px",
        }}
      >
        <Column list={list} />
      </div>
    </DragDropContext>
  );
}

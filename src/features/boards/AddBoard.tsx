import { useAppDispatch } from "../../redux/hooks";
import { ModalWBackdrop } from "../../components/ModalWBackdrop";
import useTransitionState from "../../hooks/useTransitionState";
import BoardModifier from "./BoardModifier";
import { addBoardModalOpened } from "./boardsSlice";

export default function AddBoard() {
  const dispatch = useAppDispatch();

  const [render, unRender] = useTransitionState(() => {
    dispatch(addBoardModalOpened({ open: false }));
  });

  return (
    <ModalWBackdrop render={render} onOutsideClick={unRender} testid="add_board_modal">
      <BoardModifier
        titles={["Adicionar dashboard", "Nome", "Adicionar"]}
        selectedBoard={{
          name: "",
          id: "newBoard",
          columns: ["", ""],
        }}
        type="add"
      />
    </ModalWBackdrop>
  );
}

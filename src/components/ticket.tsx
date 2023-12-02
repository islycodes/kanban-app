import React from "react";
import { TicketInterface } from "../interfaces";
import TrashIcon from "@/assets/trash-icon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@/assets/menu-icon";

interface TicketComponentProps {
  ticket: TicketInterface;
}
export const Ticket: React.FC<TicketComponentProps> = ({ ticket }) => {
  const [showTrash, setShowTrash] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClick = (ticket: TicketInterface) => {
    navigate(`/tarefa?id=${ticket.id}`);
  };
  return (
    <div
      className="flex-col rounded-md p-4 cursor-pointer bg-[#232527] select-none"
      onMouseEnter={() => setShowTrash(true)}
      onMouseLeave={() => setShowTrash(false)}
    >
      <div className="flex justify-between">
        <p className="text-base font-semibold">{ticket.name}</p>
        <div onClick={() => setOpen(true)}>
          {showTrash && <TrashIcon width={20} height={20} />}
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-xs font-semibold text-[#A9A9A9] mt-3">
          <p>
            <span>ID: </span>
            {ticket.id.split("-")[0]}
          </p>
        </p>
      </div>
      {ticket.priority && (
        <div className="text-xs font-semibold text-black bg-[#C800FA] w-min rounded-md px-1.5 mt-4">
          PRIORIDADE
        </div>
      )}
      <div className="flex justify-end items-end">
        <div onClick={() => handleClick(ticket)}>
          <MenuIcon width={13} height={3} />
        </div>
      </div>

      <Dialog
        open={open}
        onOpenChange={() => {
          setShowTrash(false);
          setOpen(false);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <p className="text-white">Deseja deletar esta tarefa?</p>
            </DialogTitle>
            <DialogDescription>
              <p className="mt-4 text-[#A9A9A9]">
                Essa ação não pode ser desfeita.
              </p>
              <div className="flex justify-start">
                <button className="mt-6 bg-[#D75050] rounded-md py-2 px-4 text-[#1D1E20] text-sm font-semibold">
                  Deletar
                </button>
                <button className="mt-6 ml-6 bg-[#A9A9A9] rounded-md py-2 px-4 text-[#1D1E20] text-sm font-semibold">
                  Cancelar
                </button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

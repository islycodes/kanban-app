import React from "react";
import { TicketInterface } from "../interfaces";
interface TicketComponentProps {
  ticket: TicketInterface;
}
export const Ticket: React.FC<TicketComponentProps> = ({ ticket }) => {
  return (
    <div className="flex-col rounded-md p-4 cursor-pointer bg-[#232527]">
      <p className="text-base font-semibold">{ticket.name}</p>
      <p className="text-xs font-semibold text-[#A9A9A9] mt-4">{ticket.id.split("-")[0]}</p>
      <div className="w-full flex justify-end">
        <div className="text-xs text-black bg-[#C800FA] w-min rounded-md px-1 justify-end">PRIORIDADE</div>
      </div>
    </div>
  );
};

import React from "react";
import { TicketInterface } from "../interfaces";
interface TicketComponentProps {
  ticket: TicketInterface;
}
export const Ticket: React.FC<TicketComponentProps> = ({ ticket }) => {
  return (
    <div className="flex-col rounded-md p-4 cursor-pointer bg-[#232527]">
      <p className="text-sm font-semibold">{ticket.name}</p>
    </div>
  );
};

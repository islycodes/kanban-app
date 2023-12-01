import React from "react";
import { TicketInterface } from "../interfaces";
interface TicketComponentProps {
  ticket: TicketInterface;
}
export const Ticket: React.FC<TicketComponentProps> = ({ ticket }) => {
  return (
    <div className="flex-col border rounded-md p-4 cursor-pointer">
      <p className="text-lg font-semibold">{ticket.name}</p>
    </div>
  );
};

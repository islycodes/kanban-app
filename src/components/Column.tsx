import React from "react";
import { Ticket } from "./Ticket";
import { TicketInterface } from "../interfaces";

interface ColumnProps {
  header: string;
  tickets: TicketInterface[];
}

export const Column: React.FC<ColumnProps> = ({ header, tickets }) => {
  return (
    <div className="h-full flex flex-col items-center">
      <div className="text-2xl font-bold">{header}</div>
      {tickets.map((ticket, index) => (
        <div>{ticket.name}</div>
      ))}
    </div>
  );
};

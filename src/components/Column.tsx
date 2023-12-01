import React from "react";
import { Ticket } from "./Ticket";
import { TicketInterface } from "../interfaces";

interface ColumnProps {
  header: string;
  tickets: TicketInterface[];
}

export const Column: React.FC<ColumnProps> = ({ header, tickets }) => {
  return (
    <div>
      <div>{header}</div>
      {tickets.map((ticket, index) => (
        <div>{ticket.name}</div>
      ))}
    </div>
  );
};

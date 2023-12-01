import React from "react";
import { Ticket } from "./ticket";
import { TicketInterface } from "../interfaces";
import { useNavigate } from "react-router-dom";

interface ColumnProps {
  header: { value: string; label: string };
  tickets: TicketInterface[];
}

export const Column: React.FC<ColumnProps> = ({ header, tickets }) => {
  const navigate = useNavigate();
  const handleClick = (ticket: TicketInterface) => {
    navigate(`/ticket?id=${ticket.id}`);
  };
  return (
    <div className="h-full flex flex-col items-center">
      <div className="text-2xl font-bold my-4">{header.label}</div>
      {tickets.map((ticket, index) => {
        return (
          ticket.status === header.value && (
            <div onClick={() => handleClick(ticket)}>
              <Ticket key={index} ticket={ticket} />
            </div>
          )
        );
      })}
    </div>
  );
};

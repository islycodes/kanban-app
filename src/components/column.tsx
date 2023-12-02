import React from "react";
import { Ticket } from "./ticket";
import { TicketInterface } from "../interfaces";
import MarkerIcon from "@/assets/marker";

interface ColumnProps {
  header: { value: string; label: string; color: string };
  tickets: TicketInterface[];
}

export const Column: React.FC<ColumnProps> = ({ header, tickets }) => {
  return (
    <div className="mt-4 h-full w-full flex flex-col select-none">
      <div className="text-lg font-semibold my-4 flex flex-row">
        <div className="mt-3 mr-2">
          <MarkerIcon color={header.color} />
        </div>
        <p>{header.label}</p>
      </div>
      {tickets.map((ticket, index) => {
        return (
          ticket.status === header.value && (
            <div className="mb-4">
              <Ticket key={index} ticket={ticket} />
            </div>
          )
        );
      })}
    </div>
  );
};

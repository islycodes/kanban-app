import React from "react";

// TypeScript only
interface TicketProps {
  text: string;
  index: number;
}

// ": React.FC<TicketProps>" is TypeScript only
// src/components/Ticket.tsx

export const Ticket: React.FC<TicketProps> = ({ text, index }) => {
  return <div key={index}>{text}</div>;
};

import { createSlice } from "@reduxjs/toolkit";
import { Ticket } from "../../interfaces";

export const initialState: { tickets: Ticket[] } = {
  tickets: [],
};

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    addTicket: (state, action) => {
      state.tickets.push(action.payload);
    },
    fetchTickets: (state, action) => {
      state.tickets = action.payload;
    },
    deleteTicket: (state, action) => {
      state.tickets = state.tickets.filter((ticket) => ticket.id !== action.payload);
    },
    updateTicket: (state, action) => {
      const { id, name, description } = action.payload;
      const existingTicket = state.tickets.find((ticket) => ticket.id === id);
      if (existingTicket) {
        existingTicket.name = name;
        existingTicket.description = description;
      }
    },
  },
});

export const { addTicket, fetchTickets, deleteTicket, updateTicket } = ticketsSlice.actions;

export default ticketsSlice.reducer;

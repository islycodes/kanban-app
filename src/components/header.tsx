import { ReactElement, useEffect, useState } from "react";
import { TicketStatusEnum } from "../enums";
import { TicketInterface } from "../interfaces";
import BellWithMarker from "./bellWithMarker";
import { ApiInstance } from "@/services/api";

export default function Header(props: {
  customSubtitle?: ReactElement;
  currentTickets?: TicketInterface[];
}) {
  const username = localStorage.getItem("username") ?? "Anônimo";
  const [tickets, setTickets] = useState<TicketInterface[]>([]);

  const getAllTickets = async () => {
    const allTickets: TicketInterface[] = [];
    const kanbans = await ApiInstance.getAllKanbans();
    kanbans.forEach((kanban) => {
      allTickets.push(...kanban.tickets);
    });
    setTickets(allTickets);
  };

  const getIncompleteTasks = (ticketsToFilter: TicketInterface[]) => {
    const incompleteTickets = ticketsToFilter.filter((ticket) => {
      return ticket.status !== TicketStatusEnum.DONE;
    });
    return incompleteTickets.length;
  };

  useEffect(() => {
    if (!props.currentTickets) getAllTickets();
  }, []);

  return (
    <>
      <div className="flex flex-col text-[#A9A9A9] select-none">
        <p className="text-2xl">Olá, {username}</p>
        {props.customSubtitle ?? (
          <div className="mt-4 font-semibold flex items-center">
            <BellWithMarker
              hasMarker={
                getIncompleteTasks(props.currentTickets ?? tickets) > 0
              }
              width={28}
              height={28}
            />{" "}
            <p className="ml-2">
              Você tem{" "}
              {`${getIncompleteTasks(props.currentTickets ?? tickets)} ${
                getIncompleteTasks(props.currentTickets ?? tickets) === 1
                  ? " tarefa incompleta"
                  : " tarefas incompletas"
              }`}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

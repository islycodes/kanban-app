import { useEffect, useState } from "react";
import { Column } from "../components/column";
import Header from "../components/header";
import { TicketStatus, TicketStatusEnum } from "../enums";
import { TicketInterface } from "../interfaces";
import { ApiInstance } from "../services/api";
import { useSearchParams } from "react-router-dom";

export function Kanban() {
  const [params] = useSearchParams();
  const [tickets, setTickets] = useState<TicketInterface[]>([]);
  const mockTickets: TicketInterface[] = [
    {
      name: "meu ticket",
      dashboard_id: 1,
      id: 1,
      status: TicketStatusEnum.TODO,
    },
  ];
  const login = async () => {
    await ApiInstance.login();
  };
  const getAllTickets = async () => {
    const id = params.get("id");
    if (id !== null) {
      const data = await ApiInstance.getAllTicketsFromKanban(id);
      setTickets(data);
    }
  };
  useEffect(() => {
    login();
  }, []);
  return (
    <div className="flex flex-col w-full h-full bg-[#1D1E20] text-[#A9A9A9] p-20">
      <Header />
      <div className="my-10 border-t-[1px] border-[#3F3F3F] w-full"></div>

      <div className="w-full flex flex-row h-full">
        <div className="flex flex-row justify-evenly w-full h-full">
          {TicketStatus.map((status) => (
            <Column header={status} tickets={tickets} />
          ))}
        </div>
      </div>
    </div>
  );
}

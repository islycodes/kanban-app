import { useEffect, useState } from "react";
import { Column } from "../components/column";
import Header from "../components/header";
import { TicketStatus, TicketStatusEnum } from "../enums";
import { DashboardInterface, TicketInterface } from "../interfaces";
import { ApiInstance } from "../services/api";

export function Kanban() {
  const [tickets, setTickets] = useState<TicketInterface[]>([]);
  const [kanbans, setKanbans] = useState<DashboardInterface[]>([]);
  const [selectedKanban, setSelectedKanban] = useState<DashboardInterface>();

  const getAllTickets = async () => {
    if (selectedKanban) {
      const data = await ApiInstance.getAllTicketsFromKanban(selectedKanban?.id);
      setTickets(data);
    }
  };

  const getAllKanbans = async () => {
    let data;
    data = await ApiInstance.getAllKanbans();
    if (data?.length === 0 || data === undefined) {
      await ApiInstance.createKanban("Meu Kanban");
      data = await ApiInstance.getAllKanbans();
    }
    setKanbans(data);
    setSelectedKanban(data[0]);
  };

  useEffect(() => {
    getAllTickets();
  }, [selectedKanban]);

  useEffect(() => {
    getAllKanbans();
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

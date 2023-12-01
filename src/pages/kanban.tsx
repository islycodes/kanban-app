import { useEffect, useState } from "react";
import Header from "../components/header";
import { DashboardInterface, TicketInterface } from "../interfaces";
import { ApiInstance } from "../services/api";
import { TicketStatus } from "../enums";
import { Column } from "../components/Column";

export function Kanban() {
  const [tickets, setTickets] = useState<TicketInterface[]>([]);
  const [kanbans, setKanbans] = useState<DashboardInterface[]>([]);
  const [selectedKanban] = useState<DashboardInterface>();

  const getAllTickets = async () => {
    if (selectedKanban) {
      const data = await ApiInstance.getAllTicketsFromKanban(
        selectedKanban.id!
      );
      setTickets(data);
    }
  };

  const getAllKanbans = async () => {
    const data = await ApiInstance.getAllKanbans();
    console.log(data);
    if (data.length === 0 && kanbans.length === 0) {
      await ApiInstance.createKanban("Meu Kanban");
      const data = await ApiInstance.getAllKanbans();
      setKanbans(data);
    } else setKanbans(data);
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

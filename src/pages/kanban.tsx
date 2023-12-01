import { useEffect, useState } from "react";
import { Column } from "../components/column";
import Header from "../components/header";
import { TicketStatus, TicketStatusEnum } from "../enums";
import { DashboardInterface, TicketInterface } from "../interfaces";
import { ApiInstance } from "../services/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function Kanban() {
  const [tickets, setTickets] = useState<TicketInterface[]>([]);
  const [kanbans, setKanbans] = useState<DashboardInterface[]>([]);
  const [selectedKanban, setSelectedKanban] = useState<DashboardInterface>();
  const [newKanbanName, setNewKanbanName] = useState("");

  const navigate = useNavigate();

  const getAllTickets = async () => {
    if (selectedKanban) {
      const data = await ApiInstance.getAllTicketsFromKanban(
        selectedKanban?.id
      );
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

  const handleAddNewKanban = async () => {
    if (!newKanbanName) return;
    await ApiInstance.createKanban(newKanbanName);
    toast.success("Novo quadro adicionado!");
    setNewKanbanName("");
    getAllKanbans();
  };

  useEffect(() => {
    if (selectedKanban) {
      getAllTickets();
    }
  }, [selectedKanban]);

  useEffect(() => {
    getAllKanbans();
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-[#1D1E20] text-[#A9A9A9] p-20">
      <div className="flex flex-row justify-between items-end">
        <Header />
        <button
          className="border rounded-md text-white p-2 h-min"
          onClick={() => navigate("/tarefa")}
        >
          Adicionar Ticket
        </button>
      </div>
      <div className="my-10 border-t-[1px] border-[#3F3F3F] w-full"></div>
      <div className="flex flex-row justify-between">
        <Select
          value={selectedKanban?.id}
          onValueChange={(e) =>
            setSelectedKanban(kanbans.find((kanban) => kanban.id === e))
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={"Selecione um quadro"} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {kanbans.map((kanban) => (
                <SelectItem value={kanban.id}>{kanban.name}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex flex-row">
          <input
            value={newKanbanName}
            onChange={(e) => {
              setNewKanbanName(e.target.value);
            }}
            placeholder="Nome do quadro"
            className="mx-3 rounded-md px-2 bg-[#3F3F3F] text-[#A9A9A9] placeholder-[#686868]"
          />
          <button
            className="font-semibold rounded-md text-[#232527] px-2 bg-[#FAB600]"
            onClick={handleAddNewKanban}
          >
            Adicionar
          </button>
        </div>
      </div>

      <div className="w-full flex flex-row h-full">
        <div className="flex flex-row justify-evenly w-full h-full">
          {TicketStatus.map((status) => (
            <div className="mr-12 w-full h-full">
              <Column header={status} tickets={tickets} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

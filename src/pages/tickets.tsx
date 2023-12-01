import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TicketInterface } from "../interfaces";
import { ApiInstance } from "../services/api";
import Header from "../components/header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import MarkerIcon from "@/assets/marker";
import { TicketStatusEnum } from "@/enums";
export default function Tasks() {
  const [params] = useSearchParams();
  const [ticket, setTicket] = useState<TicketInterface>();

  const [editMode, setEditMode] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<string>();

  useEffect(() => {
    const id = params.get("id");
    if (id !== null) {
      setEditMode(true);
      ApiInstance.getOneTicket(id).then((value) => {
        setTicket(value);
        setName(value.name);
        setDescription(value?.description ?? "");
        setStatus(value?.status);
      });
    }
  }, []);

  const handleStatusChange = async (status: TicketStatusEnum) => {
    setStatus(status);
    ticket && (await ApiInstance.updateTicketStatus(ticket?.id, status));
  };

  return (
    <div className="w-full h-full bg-[#1D1E20]">
      <div className="p-20">
        <Header />
        <div className="my-10 border-t-[1px] border-[#3F3F3F] w-full"></div>
        <div className="flex flex-col">
          <p className="mb-4 text-lg text-[#FAB600] font-medium">
            {editMode ? "Visualizando tarefa" : "Adicionando nova tarefa"}
          </p>
          <div>
            <label className="text-[#A9A9A9] mr-2">Título: </label>
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              disabled={editMode}
              className="rounded-md bg-[#232527] h-[40px] mt-2 w-[400px] text-[#A9A9A9] py-2 px-4 ml-[27px] cursor-not-allowed"
            />
          </div>
          <div className="mt-4 flex flex-row">
            <label className="text-[#A9A9A9] mr-2 mt-3">Descrição: </label>
            <Textarea
              disabled={editMode}
              className="rounded-md bg-[#232527] h-[80px] mt-2 w-[400px] text-[#A9A9A9] py-2 px-4 ml-1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-6 flex flex-row">
            <label className="text-[#A9A9A9] mr-2 mt-3">Status: </label>
            <div className="ml-8 mt-2">
              <Select
                value={status as TicketStatusEnum}
                onValueChange={handleStatusChange}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={TicketStatusEnum.TODO}>
                    <div className="flex flex-row">
                      <div className="mt-2 mr-2">
                        <MarkerIcon color={"#EC9CB9"} />
                      </div>
                      <p>Não iniciado</p>
                    </div>
                  </SelectItem>
                  <SelectItem value={TicketStatusEnum.DOING}>
                    <div className="flex flex-row">
                      <div className="mt-2 mr-2">
                        <MarkerIcon color={"#5B97BD"} />
                      </div>
                      <p>Em andamento</p>
                    </div>
                  </SelectItem>
                  <SelectItem value={TicketStatusEnum.DONE}>
                    <div className="flex flex-row">
                      <div className="mt-2 mr-2">
                        <MarkerIcon color={"#6C9B7D"} />
                      </div>
                      <p>Concluído</p>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

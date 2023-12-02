import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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
import { toast } from "react-toastify";
import { Checkbox } from "@/components/ui/checkbox";
export default function Tasks() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [ticket, setTicket] = useState<TicketInterface>();

  const [editMode, setEditMode] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<string>();
  const [priority, setPriority] = useState(false);

  useEffect(() => {
    const id = params.get("id");
    if (id !== null) {
      setEditMode(true);
      ApiInstance.getOneTicket(id).then((value) => {
        setTicket(value);
        setName(value.name);
        setDescription(value?.description ?? "");
        setStatus(value?.status);
        setPriority(value.priority);
      });
    }
  }, []);

  const handleStatusChange = async (status: TicketStatusEnum) => {
    setStatus(status);
    ticket && (await ApiInstance.updateTicketStatus(ticket?.id, status));
  };

  const handleSubmit = async () => {
    if (!editMode) {
      const kanbanId = params.get("quadro");
      if (kanbanId === null) return;
      await ApiInstance.addTicketToKanban(kanbanId, {
        name,
        description,
        status: status as TicketStatusEnum,
        priority,
      });
      toast.success("Ticket adicionado!", { theme: "dark" });
    }
    navigate(-1);
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
              className={`rounded-md bg-[#232527] h-[40px] mt-2 w-[400px] text-[#A9A9A9] py-2 px-4 ml-[27px] ${
                editMode && "cursor-not-allowed"
              }`}
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
            <div className="ml-8 mt-2 flex w-full">
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
              <div className="ml-[122px] flex items-center">
                <Checkbox
                  disabled={editMode}
                  id="priority"
                  checked={priority}
                  onCheckedChange={() => {
                    setPriority(!priority);
                  }}
                />
                <label
                  htmlFor="priority"
                  className="text-sm font-medium text-[#A9A9A9] ml-2"
                >
                  Prioridade
                </label>
              </div>
            </div>
          </div>
          <button
            className="font-semibold rounded-md mt-8 text-[#232527] p-1 px-4 w-min bg-[#FAB600]"
            onClick={handleSubmit}
          >
            {editMode ? "Salvar" : "Adicionar"}
          </button>
        </div>
      </div>
    </div>
  );
}

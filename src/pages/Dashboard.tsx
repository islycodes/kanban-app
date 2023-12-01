import { Column } from "../components/Column";
import SideBar from "../components/sidebar";
import { TicketInterface } from "../interfaces";

export function Dashboard() {
  const headers = ["Atribuído", "Em andamento", "Concluído"];
  const mockTickets: TicketInterface[] = [
    {
      dashboard_id: 1,
      description: "teste",
      id: 1,
      name: "meu ticket",
      status: "atribuido",
    },
  ];
  return (
    <div className="h-screen w-screen flex">
      <SideBar />
      <div className="w-full bg-[#1D1E20] flex flex-row h-full">
        <div className="bg-[#1D1E20] flex flex-row justify-evenly w-full h-full">
          {headers.map((header) => (
            <Column header={header} tickets={[]} />
          ))}
        </div>
      </div>
    </div>
  );
}

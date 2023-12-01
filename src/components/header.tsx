import { ReactElement } from "react";
import { TicketStatusEnum } from "../enums";
import { TicketInterface } from "../interfaces";

export default function Header(props: { customSubtitle?: ReactElement }) {
  const mockTickets: TicketInterface[] = [
    {
      name: "meu ticket",
      dashboard_id: 1,
      id: 1,
      status: TicketStatusEnum.TODO,
    },
  ];
  const username = "usuário";

  const getIncompleteTasks = () => {
    const incompleteTickets = mockTickets.filter((ticket) => {
      ticket.status !== TicketStatusEnum.DONE;
    });
    return incompleteTickets.length;
  };

  return (
    <>
      <div className="flex flex-col text-[#A9A9A9]">
        <p className="text-2xl">Olá, {username}</p>
        {props.customSubtitle ?? (
          <div className="mt-4 font-semibold">
            adicionar icone aqui Você tem {getIncompleteTasks()} tarefas
            incompletas
          </div>
        )}
      </div>
    </>
  );
}

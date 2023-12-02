import ArrowDownIcon from "@/assets/arrow-down";
import ArrowUpIcon from "@/assets/arrow-up";
import Header from "@/components/header";
import { Ticket } from "@/components/ticket";
import { TicketStatusEnum } from "@/enums";
import { TicketInterface } from "@/interfaces";
import { ApiInstance } from "@/services/api";
import { useEffect, useState } from "react";

interface AllTicketsByStatus {
  status: TicketStatusEnum;
  tickets: TicketInterface[];
}

export default function Homepage() {
  const [open, setOpen] = useState(false);
  const [allTickets, setAllTickets] = useState<AllTicketsByStatus[]>();
  const [allPriorityTickets, setAllPriorityTickets] =
    useState<TicketInterface[]>();

  const fetchAndFilterAllTickets = async () => {
    const kanbans = await ApiInstance.getAllKanbans();
    const tickets: AllTicketsByStatus[] = [
      {
        status: TicketStatusEnum.TODO,
        tickets: [],
      },
      {
        status: TicketStatusEnum.TODO,
        tickets: [],
      },
      {
        status: TicketStatusEnum.TODO,
        tickets: [],
      },
    ];
    const priorityTickets: TicketInterface[] = [];
    kanbans.forEach((kanban) => {
      kanban.tickets.forEach((ticket) => {
        if (ticket.priority && ticket.status !== TicketStatusEnum.DONE) {
          priorityTickets.push(ticket);
        }
        switch (ticket.status) {
          case TicketStatusEnum.TODO:
            tickets[0].tickets.push(ticket);
            break;
          case TicketStatusEnum.DOING:
            tickets[1].tickets.push(ticket);
            break;
          case TicketStatusEnum.DONE:
            tickets[2].tickets.push(ticket);
            break;
        }
      });
    });
    setAllTickets(tickets);
    setAllPriorityTickets(priorityTickets);
  };

  useEffect(() => {
    fetchAndFilterAllTickets();
  }, []);
  return (
    <div className="h-full w-full bg-[#1D1E20]">
      <div className="p-20">
        <Header />
        <div className="my-10 border-t-[1px] border-[#3F3F3F] w-full"></div>
        <div className="flex justify-between">
          <p className="text-[#A9A9A9] font-semibold text-xl">Dashboard</p>
        </div>
        <div className="flex flex-row mt-10 justify-between">
          <div className="flex flex-row">
            <div>
              <div className="bg-[#EC9CB9] w-[260px] font-semibold p-2 px-4 rounded-md flex justify-between">
                Não iniciado - {allTickets && allTickets[0]?.tickets.length}
              </div>
              {allTickets &&
                allTickets[0]?.tickets?.map((ticket, index) => {
                  return (
                    <div className="mt-4 text-[#A9A9A9]">
                      <Ticket key={index} ticket={ticket} />
                    </div>
                  );
                })}
            </div>
            <div className="mx-10">
              <div className="bg-[#5B97BD] w-[260px] font-semibold p-2 px-4 rounded-md flex justify-between">
                Em andamento - {allTickets && allTickets[1]?.tickets.length}
              </div>
              {allTickets &&
                allTickets[1]?.tickets?.map((ticket, index) => {
                  return (
                    <div className="mt-4 text-[#A9A9A9]">
                      <Ticket key={index} ticket={ticket} />
                    </div>
                  );
                })}
            </div>
            <div>
              <div className="bg-[#6C9B7D] w-[260px] font-semibold p-2 px-4 rounded-md flex justify-between">
                Concluído - {allTickets && allTickets[2]?.tickets.length}
              </div>
              {allTickets &&
                allTickets[2]?.tickets?.map((ticket, index) => {
                  return (
                    <div className="mt-4 text-[#A9A9A9]">
                      <Ticket key={index} ticket={ticket} />
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="flex flex-col w-[260px]">
            <div
              onClick={() => setOpen(!open)}
              className="text-[#FAB600] text-lg flex items-center cursor-pointer"
            >
              <p className="mr-2">Tarefas Prioritárias</p>
              {open ? (
                <ArrowUpIcon width={12} height={8} />
              ) : (
                <ArrowDownIcon width={12} height={8} />
              )}
            </div>
            {open &&
              allPriorityTickets?.map((ticket, index) => {
                return (
                  <div className="mt-4 text-[#A9A9A9]">
                    <Ticket key={index} ticket={ticket} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

import Header from "@/components/header";
import { TicketStatusEnum, TicketStatus } from "@/enums";
import { TicketInterface } from "@/interfaces";
import { ApiInstance } from "@/services/api";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

interface AllTicketsByStatus {
  status: TicketStatusEnum;
  tickets: TicketInterface[];
}

export default function Reports() {
  const [allTickets, setAllTickets] = useState<AllTicketsByStatus[]>();
  const [total, setTotal] = useState(0);
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
    let qtd = 0;
    kanbans.forEach((kanban) => {
      kanban.tickets.forEach((ticket) => {
        qtd++;
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
    setTotal(qtd);
    setAllTickets(tickets);
  };

  useEffect(() => {
    fetchAndFilterAllTickets();
  }, []);

  const data = {
    labels: TicketStatus.map((status) => status.label),
    datasets: [
      {
        data: allTickets?.map((byStatus) => byStatus.tickets.length),
        backgroundColor: TicketStatus.map((status) => status.color),
      },
    ],
  };

  return (
    <div className="h-full p-20 w-full bg-[#1D1E20]">
      <Header />
      <div className="my-10 border-t-[1px] border-[#3F3F3F] w-full"></div>
      <div className="flex flex-row justify-evenly">
        <div className="w-[400px] h-[400px]">
          <Doughnut
            data={data}
            options={{
              borderColor: "#1D1E20",
              color: "#A9A9A9",
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
        <div className="text-[#A9A9A9] text-2xl">
          <p>Total: {total}</p>
          {allTickets && (
            <>
              <p className={`flex flex-row items-center`}>
                <p className={`text-[#EC9CB9] mr-1`}>{Math.round((allTickets[0].tickets.length / total) * 100)}%</p> {TicketStatus[0].label}
              </p>
              <p className={`flex flex-row items-center`}>
                <p className={`text-[#5B97BD] mr-1`}>{Math.round((allTickets[1].tickets.length / total) * 100)}%</p> {TicketStatus[1].label}
              </p>
              <p className={`flex flex-row items-center`}>
                <p className={`text-[#6C9B7D] mr-1`}>{Math.round((allTickets[2].tickets.length / total) * 100)}%</p> {TicketStatus[2].label}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

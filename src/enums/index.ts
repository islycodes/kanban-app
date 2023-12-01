export enum TicketStatusEnum {
  TODO = "todo",
  DOING = "doing",
  DONE = "done",
}

export const TicketStatus = [
  {
    value: TicketStatusEnum.TODO,
    label: "Não iniciado",
    color: "#EC9CB9",
  },
  {
    value: TicketStatusEnum.DOING,
    label: "Em andamento",
    color: "#5B97BD",
  },
  {
    value: TicketStatusEnum.DONE,
    label: "Concluído",
    color: "#6C9B7D",
  },
];

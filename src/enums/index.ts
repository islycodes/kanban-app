export enum TicketStatusEnum {
  TODO = "todo",
  DOING = "doing",
  DONE = "done",
}

export const TicketStatus = [
  {
    value: TicketStatusEnum.TODO,
    label: "A fazer",
  },
  {
    value: TicketStatusEnum.DOING,
    label: "Fazendo",
  },
  {
    value: TicketStatusEnum.DONE,
    label: "Feito",
  },
];

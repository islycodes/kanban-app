import { TicketStatusEnum } from "../enums";

export interface TicketInterface {
  id: number;
  name: string;
  description?: string;
  status: TicketStatusEnum;
  dashboard_id: number;
}
export interface DashboardInterface {
  id: number;
  name: string;
  tickets: TicketInterface[];
  user_id: string;
}

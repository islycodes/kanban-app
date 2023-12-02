import { TicketStatusEnum } from "../enums";

export interface TicketInterface {
  id: string;
  name: string;
  description?: string;
  status: TicketStatusEnum;
  dashboard_id: number;
  priority: boolean;
}
export interface DashboardInterface {
  id: string;
  name: string;
  tickets: TicketInterface[];
  user_id: string;
}

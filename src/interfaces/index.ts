export interface TicketInterface {
  id: number;
  name: string;
  description: string;
  status: string;
  dashboard_id: number;
}
export interface DashboardInterface {
  id: number;
  name: string;
  tickets: TicketInterface[];
  user_id: string;
}

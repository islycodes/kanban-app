export interface Ticket {
  id: number;
  name: string;
  description: string;
  status: string;
  dashboard_id: number;
}
export interface Dashboard {
  id: number;
  name: string;
  tickets: Ticket[];
  user_id: string;
}

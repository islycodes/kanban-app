import axios from "axios";
import { DashboardInterface, TicketInterface } from "../interfaces";
import { TicketStatusEnum } from "@/enums";

class ApiServiceClass {
  Api = axios.create({
    baseURL: "http://192.168.3.105:5000",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  async login(username: string, password: string): Promise<void> {
    try {
      const { data } = await this.Api.post("/login", {
        username,
        password,
      });
      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("username", data.user.username);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to login");
    }
  }

  async register(username: string, email: string, password: string) {
    return await this.Api.post("/users/create", {
      username,
      email,
      password,
    });
  }

  async getAllTicketsFromKanban(kanbanId: string): Promise<TicketInterface[]> {
    const { data } = await this.Api.get(`/tickets/getTicketsByDashboard/${kanbanId}`);
    return data;
  }

  async createKanban(name: string) {
    const userId = localStorage.getItem("userId");
    const { data } = await this.Api.post("/dashboards/create", {
      name,
      user_id: userId,
    });
    return data;
  }

  async getOneTicket(ticketId: string): Promise<TicketInterface> {
    const { data } = await this.Api.get(`/tickets/getTicketById/${ticketId}`);
    return data;
  }

  async deleteTicket(ticketId: string) {
    await this.Api.delete(`/tickets/delete/${ticketId}`);
  }

  async getAllKanbans(): Promise<DashboardInterface[]> {
    const userId = localStorage.getItem("userId");
    const { data } = await this.Api.get(`/dashboards/getDashboardByUserId/${userId}`);
    return data;
  }

  async updateTicketStatus(ticketId: string, status: TicketStatusEnum) {
    await this.Api.put(`/tickets/changeStatus/${ticketId}`, {
      status,
    });
  }

  async updateTicketData(ticketId: string, name: string, description: string, priority: boolean) {
    await this.Api.put(`/tickets/changeData/${ticketId}`, {
      name,
      description,
      priority,
    });
  }

  async addTicketToKanban(dashboardId: string, ticket: Partial<TicketInterface>) {
    await this.Api.post(`/tickets/create`, {
      name: ticket.name,
      description: ticket.description,
      status: ticket.status,
      dashboard_id: dashboardId,
      priority: ticket.priority,
    });
  }

  async addDashboardFunction(dashboard: DashboardInterface) {
    try {
      console.log(dashboard);
      const response = await this.Api.post("/dashboards/create", dashboard);

      if (response.status < 200 || response.status >= 300) {
        throw new Error("HTTP error " + response.status);
      }

      return response.data;
    } catch (error) {
      alert("Failed to post dashboard: " + error);
      return;
    }
  }

  async addTicketsFunction(ticket: TicketInterface): Promise<boolean> {
    try {
      const response = await this.Api.post("/tickets/create", ticket);

      if (response.status !== 200) {
        throw new Error("HTTP error " + response.status);
      }

      return true;
    } catch (error) {
      alert("Failed to post tickets: " + error);
      return false;
    }
  }
}
export const ApiInstance = new ApiServiceClass();

import axios from "axios";
import { TicketInterface } from "../interfaces";
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
    }
  }

  async getAllTicketsFromKanban(kanbanId: string): Promise<TicketInterface[]> {
    const { data } = await this.Api.get(
      `/tickets/getTicketsByDashboard/${kanbanId}`
    );
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

  async getAllKanbans() {
    const userId = localStorage.getItem("userId");
    const { data } = await this.Api.get(
      `/dashboards/getDashboardByUserId/${userId}`
    );
    return data;
  }

  async updateTicketStatus(ticketId: string, status: TicketStatusEnum) {
    await this.Api.put(`/tickets/changeStatus/${ticketId}`, {
      status,
    });
  }
}
export const ApiInstance = new ApiServiceClass();

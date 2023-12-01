import axios from "axios";
import { DashboardInterface, TicketInterface } from "../interfaces";

class ApiServiceClass {
  Api = axios.create({
    baseURL: "http://127.0.0.1:5000",
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
      console.log(data);
      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("username", data.user.username);
    } catch (error) {
      console.log();
    }
  }

  async getAllTicket() {}

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
  async getOneTicket(): Promise<TicketInterface> {
    return {} as TicketInterface;
  }

  async getAllKanbans() {
    const userId = localStorage.getItem("userId");
    console.log(userId);
    const { data } = await this.Api.get(
      `/dashboards/getDashboardByUserId/${userId === null || userId === '' ? "28588d6f-1c82-4439-a6dc-047885dba6fd" : userId}`
    );
    return data;
  }

  // async getOneKanban(kanbanId: string) {}

  async addDashboardFunction(dashboard: DashboardInterface) {
    try {
      console.log(dashboard);
      const response = await this.Api.post("/dashboards/create", dashboard);
      

      if (response.status < 200 || response.status >= 300) {
          throw new Error('HTTP error ' + response.status);
      }
      
      return response.data;
    } catch (error) {
      alert('Failed to post dashboard: ' + error);
      return;
    }
  }

  async addTicketsFunction(ticket: TicketInterface): Promise<boolean> {
    try {
        const response = await this.Api.post("/tickets/create", ticket);

        if (response.status !== 200) {
            throw new Error('HTTP error ' + response.status);
        }

        return true;
    } catch (error) {
        alert('Failed to post tickets: ' + error);
        return false;
    }
  }
}

export const ApiInstance = new ApiServiceClass();

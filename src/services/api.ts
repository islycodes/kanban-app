import axios from "axios";
import { TicketInterface } from "../interfaces";

class ApiServiceClass {
  Api = axios.create({
    baseURL: "http://192.168.3.223:5000",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  async login(): Promise<void> {
    console.log(this.Api.defaults);
    const { data } = await this.Api.post("/login", {
      username: "username",
      password: "123",
    });
    console.log(data);
  }

  async getAllTicket() {}

  async getAllTicketsFromKanban() {}

  async getOneTicket(ticketId: string): Promise<TicketInterface> {
    return {} as TicketInterface;
  }

  async getAllKanban() {}

  async getOneKanban(kanbanId: string) {}
}
export const ApiInstance = new ApiServiceClass();

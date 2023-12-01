import React from "react";
import UploadIcon from "../assets/upload";
import Header from "../components/header";
import { DashboardInterface } from "../interfaces";
import { ApiInstance } from "../services/api";

export default function Import() {
  const [file, setFile] = React.useState<File | null>(null);

  async function importData() {
    const userId = localStorage.getItem("userId");
    console.log(userId);
    if (!file) {
      alert('No file selected');
      return;
    }
  
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        console.log(event.target!.result);
        const parsedData = JSON.parse(event.target!.result as string);

        const data = Array.isArray(parsedData) ? parsedData : [parsedData] as DashboardInterface[];
        for (const dashboard of data) {
          const { tickets, ...dashboardWithoutTickets } = dashboard;
          if(userId != null) {
            dashboardWithoutTickets.user_id = userId!;
          }
          const successData = await ApiInstance.addDashboardFunction({"name": dashboardWithoutTickets.name, "user_id": dashboardWithoutTickets.user_id});
          if (!successData) {
            console.error('Failed to add dashboard:', dashboardWithoutTickets);
            return false;
          } else {
            const dashboard: DashboardInterface = successData;
            if (tickets && tickets.length > 0) {
              for (const ticket of tickets) {
                ticket.dashboard_id = dashboard.id;
                if (Object.keys(ticket).length > 0) {
                  const success = await ApiInstance.addTicketsFunction(ticket);
                  if (!success) {
                    console.error('Failed to add ticket:', ticket);
                    return false;
                  }
                }
              }
            }
          }
        }
      } catch (error) {
        console.error('Error processing data:', error);
      }
    };
    reader.onerror = (error) => {
      console.error('Error reading file:', error);
      alert('Error reading file');
    };
    reader.readAsText(file);
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setFile(files[0]);
    }
  };

  return (
    <>
      <div className="h-full w-full flex flex-col bg-[#1D1E20] p-20">
        <Header />
        <div className="my-10 border-t-[1px] border-[#3F3F3F] w-full"></div>
        <div className="border-[#3F3F3F] border-[2px] rounded-md p-10 flex flex-col items-center">
          <label htmlFor="dropzone-file">
            <div className="flex justify-center">
              <UploadIcon width={64} height={64} />
            </div>
            <p className="mt-4 text-[#A9A9A9]">
              Selecione ou arraste o arquivo .json
            </p>
          </label>
          <input
            id="dropzone-file"
            accept=".json"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex justify-start">
          <button onClick={()=>{importData()}} className="mt-6 bg-[#FAB600] rounded-md py-2 px-4 text-[#1D1E20] text-sm font-semibold">
            Importar
          </button>
          <button className="mt-6 ml-6 bg-[#EEEEEE] rounded-md py-2 px-4 text-[#1D1E20] text-sm font-semibold">
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
}

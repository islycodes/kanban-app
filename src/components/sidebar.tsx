import AboutUsIcon from "../assets/about";
import ArrowDownIcon from "../assets/arrow-down";
import BacklogIcon from "../assets/backlog";
import ExportIcon from "../assets/export";
import HomeIcon from "../assets/home";
import ImportIcon from "../assets/import";
import KanbanIcon from "../assets/kanban";
import LogoutIcon from "../assets/logout";
import SettingsIcon from "../assets/settings";
import ReportsIcon from "../assets/sprint";
import TeamHub from "../assets/teamhub";
import TeamHubLogo from "../assets/teamhub-logo";

export default function SideBar() {
  return (
    <div className="min-w-[300px] flex select-none">
      <div className="w-full flex flex-col justify-between bg-[#1D1E20] p-6 border-[#000000] border-r-[1px] ">
        <div>
          <div className="flex cursor-pointer">
            <TeamHubLogo width={50} height={50} />
            <p className="ml-4 mt-3">
              <TeamHub width={100} height={30} />
            </p>
          </div>
          <div className="mt-10">
            <div className="flex ml-2 cursor-pointer">
              <HomeIcon width={24} height={24} />
              <p className="ml-4 text-[#A9A9A9] font-medium">Inicio</p>
            </div>
            <div className="flex mt-4 ml-2 cursor-pointer">
              <KanbanIcon width={24} height={24} />
              <p className="ml-4 text-[#A9A9A9] font-medium">Quadro</p>
            </div>
            <div className="flex mt-4 ml-2 cursor-pointer">
              <BacklogIcon width={24} height={24} />
              <p className="ml-4 text-[#A9A9A9] font-medium">Backlog</p>
            </div>
            <div className="flex mt-4 ml-2 cursor-pointer">
              <ReportsIcon width={24} height={24} />
              <p className="ml-4 text-[#A9A9A9] font-medium">Relatórios</p>
            </div>
          </div>
          <div className="mt-10 ml-3">
            <div className="flex justify-between items-center cursor-pointer">
              <p className="font-semibold text-[#FAB600]">MENU</p>
              <ArrowDownIcon width={12} height={8} />
            </div>
            <div className="flex mt-4 cursor-pointer items-center">
              <ImportIcon width={24} height={24} />
              <p className="ml-4 mt-1 text-[#A9A9A9] font-medium">Importar</p>
            </div>
            <div className="flex mt-4 cursor-pointer items-center">
              <ExportIcon width={24} height={24} />
              <p className="ml-4 mt-1 text-[#A9A9A9] font-medium">Exportar</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-3 pb-6">
          <div className="border-t-[1px] border-[#3F3F3F] w-full">
            <div className="flex mt-4 cursor-pointer items-center">
              <AboutUsIcon width={24} height={24} />
              <p className="ml-4 text-[#A9A9A9] font-medium">Sobre</p>
            </div>
            <div className="flex mt-4 cursor-pointer items-center">
              <SettingsIcon width={24} height={24} />
              <p className="ml-4 text-[#A9A9A9] font-medium">Configurações</p>
            </div>
            <div className="flex mt-4 cursor-pointer items-center">
              <LogoutIcon width={24} height={24} />
              <p className="ml-4 text-[#A9A9A9] font-medium">Sair</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

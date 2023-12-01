import { useState } from "react";
import AboutUsIcon from "../assets/about-icon";
import ArrowDownIcon from "../assets/arrow-down";
import BacklogIcon from "../assets/backlog-icon";
import ExportIcon from "../assets/export-icon";
import HomeIcon from "../assets/home";
import ImportIcon from "../assets/import-icon";
import KanbanIcon from "../assets/kanban-icon";
import LogoutIcon from "../assets/logout";
import SettingsIcon from "../assets/settings-icon";
import ReportsIcon from "../assets/reports-icon";
import TeamHub from "../assets/teamhub";
import TeamHubLogo from "../assets/teamhub-logo";
import ArrowUpIcon from "../assets/arrow-up";
import { useLocation, useNavigate } from "react-router-dom";
import MarkerIcon from "../assets/marker";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const generateMarker = (targetPath: string) => {
    return targetPath === location.pathname && <MarkerIcon color="#FAB600" />;
  };
  return (
    location.pathname !== "/login" &&
    location.pathname !== "/cadastro" && (
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
              <div
                onClick={() => navigate("/inicio")}
                className="flex ml-2 cursor-pointer flex-row justify-between items-center"
              >
                <div className="flex flex-row">
                  <HomeIcon width={24} height={24} />
                  <p className="ml-4 text-[#A9A9A9] font-medium">Inicio</p>
                </div>
                {generateMarker("/inicio")}
              </div>
              <div
                onClick={() => navigate("/quadro")}
                className="flex mt-4 ml-2 cursor-pointer flex-row justify-between items-center"
              >
                <div className="flex flex-row">
                  <KanbanIcon width={24} height={24} />
                  <p className="ml-4 text-[#A9A9A9] font-medium">Quadro</p>
                </div>
                {generateMarker("/quadro")}
              </div>
              <div
                onClick={() => navigate("/backlog")}
                className="flex mt-4 ml-2 cursor-pointer flex-row justify-between items-center"
              >
                <div className="flex flex-row">
                  <BacklogIcon width={24} height={24} />
                  <p className="ml-4 text-[#A9A9A9] font-medium">Backlog</p>
                </div>
                {generateMarker("/backlog")}
              </div>
              <div
                onClick={() => navigate("/relatorios")}
                className="flex mt-4 ml-2 cursor-pointer flex-row justify-between items-center"
              >
                <div className="flex flex-row">
                  <ReportsIcon width={24} height={24} />
                  <p className="ml-4 text-[#A9A9A9] font-medium">Relatórios</p>
                </div>
                {generateMarker("/relatorios")}
              </div>
            </div>
            <div className="mt-10 ml-3">
              <div
                onClick={() => setOpen(!open)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="font-semibold text-[#FAB600]">MENU</p>
                {open ? (
                  <ArrowUpIcon width={12} height={8} />
                ) : (
                  <ArrowDownIcon width={12} height={8} />
                )}
              </div>
              {open && (
                <>
                  <div
                    onClick={() => navigate("/importar")}
                    className="flex mt-4 cursor-pointer flex-row justify-between items-center"
                  >
                    <div className="flex flex-row">
                      <ImportIcon width={24} height={24} />
                      <p className="ml-4 text-[#A9A9A9] font-medium">
                        Importar
                      </p>
                    </div>
                    {generateMarker("/importar")}
                  </div>
                  <div
                    onClick={() => navigate("/exportar")}
                    className="flex mt-4 cursor-pointer flex-row justify-between items-center"
                  >
                    <div className="flex flex-row">
                      <ExportIcon width={24} height={24} />
                      <p className="ml-4 text-[#A9A9A9] font-medium">
                        Exportar
                      </p>
                    </div>
                    {generateMarker("/exportar")}
                  </div>{" "}
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col ml-3 pb-6">
            <div className="border-t-[1px] border-[#3F3F3F] w-full">
              <div
                onClick={() => navigate("/sobre")}
                className="flex mt-4 cursor-pointer flex-row justify-between items-center"
              >
                <div className="flex flex-row">
                  <AboutUsIcon width={24} height={24} />
                  <p className="ml-4 text-[#A9A9A9] font-medium">Sobre</p>
                </div>
                {generateMarker("/sobre")}
              </div>
              <div
                onClick={() => navigate("/configuracoes")}
                className="flex mt-4 cursor-pointer flex-row justify-between items-center"
              >
                <div className="flex flex-row">
                  <SettingsIcon width={24} height={24} />
                  <p className="ml-4 text-[#A9A9A9] font-medium">
                    Configurações
                  </p>
                </div>
                {generateMarker("/configuracoes")}
              </div>
              <div className="flex mt-4 cursor-pointer items-center">
                <LogoutIcon width={24} height={24} />
                <p className="ml-4 text-[#A9A9A9] font-medium">Sair</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

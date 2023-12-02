import { Route, Routes } from "react-router-dom";
import Import from "./pages/import";
import Export from "./pages/export";
import AboutUs from "./pages/about-us";
import { Kanban } from "./pages/kanban";
import SideBar from "./components/sidebar";
import Login from "./pages/login";
import Register from "./pages/register";
import Tasks from "./pages/tickets";
import Homepage from "./pages/homepage";
import Reports from "./pages/reports";

const RedirectToKanban: React.FC = () => {
  window.location.href = "/inicio";
  return <></>;
};

export const App = () => {
  return (
    <div className="h-screen w-screen flex">
      <SideBar />
      <Routes>
        <Route>
          <Route path="/*" element={<RedirectToKanban />} />
        </Route>
        <Route path={`/inicio`} element={<Homepage />} />
        <Route path={`/quadro`} element={<Kanban />} />
        <Route path={`/relatorios`} element={<Reports />} />
        <Route path={`/importar`} element={<Import />} />
        <Route path={`/exportar`} element={<Export />} />
        <Route path={`/sobre`} element={<AboutUs />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/cadastro`} element={<Register />} />
        <Route path={`/tarefa`} element={<Tasks />} />
      </Routes>
    </div>
  );
};

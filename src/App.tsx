import { Route, Routes } from "react-router-dom";
import Backlog from "./pages/backlog";
import Reports from "./pages/reports";
import Import from "./pages/import";
import Export from "./pages/export";
import AboutUs from "./pages/about-us";
import Settings from "./pages/settings";
import { Kanban } from "./pages/kanban";
import SideBar from "./components/sidebar";
import Login from "./pages/login";
import Register from "./pages/register";

const RedirectToKanban: React.FC = () => {
  window.location.href = "/quadro";
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

        <Route path={`/quadro`} element={<Kanban />} />
        <Route path={`/backlog`} element={<Backlog />} />
        <Route path={`/relatorios`} element={<Reports />} />
        <Route path={`/importar`} element={<Import />} />
        <Route path={`/exportar`} element={<Export />} />
        <Route path={`/sobre`} element={<AboutUs />} />
        <Route path={`/configuracoes`} element={<Settings />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/cadastro`} element={<Register />} />
      </Routes>
    </div>
  );
};

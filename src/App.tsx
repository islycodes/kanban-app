import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

const RedirectToDashboard: React.FC = () => {
  window.location.href = "/dashboard";
  return <></>;
};

export const App = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/*" element={<RedirectToDashboard />} />
        </Route>

        <Route path={`/dashboard`} element={<Dashboard />} />
        {/* <Route path={`/login`} element={<Login />} />
      <Route path={`/logout`} element={<Logout />} />
    <Route path={`/register`} element={<Register />} /> */}
      </Routes>
    </div>
  );
};

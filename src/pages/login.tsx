import { useNavigate } from "react-router-dom";
import TeamHubLogo from "../assets/teamhub-logo";
import { useState } from "react";
import { ApiInstance } from "../services/api";
import TeamHub from "../assets/teamhub";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async () => {
    try {
      await ApiInstance.login(username, password);
      navigate("/inicio");
    } catch (error) {
      setError("Credenciais inválidas");
    }
  };

  return (
    <div className="w-screen h-screen bg-[#1D1E20] flex items-center">
      <div className="flex flex-col items-center w-full">
        <div className="my-6 flex flex-col items-center">
          <TeamHubLogo width={200} height={200} />
          <TeamHub width={100} height={30} />
        </div>
        <input
          type="text"
          id="username"
          placeholder="digite seu username"
          onChange={(e) => {
            setUsername(e?.target?.value);
          }}
          className="rounded-md bg-[#232527] h-[40px] mt-2 w-[400px] text-[#A9A9A9] py-2 px-4 placeholder-[#4A4D50]"
        />
        <input
          type="password"
          id="password"
          onChange={(e) => {
            setPassword(e?.target?.value);
          }}
          placeholder="digite sua senha"
          className="rounded-md bg-[#232527] h-[40px] mt-4  w-[400px] text-[#A9A9A9] py-2 px-4 placeholder-[#4A4D50]"
        />
        <p className="text-red-700">{error}</p>
        <div className="flex w-[400px] justify-end">
          <div className="text-[#A9A9A9] text-sm mt-4 mr-1">
            Não possui conta?{" "}
            <span
              onClick={() => navigate("/cadastro")}
              className="text-[#FAB600] font-semibold cursor-pointer"
            >
              Cadastre-se
            </span>
          </div>
        </div>
        <div className="flex w-[400px] justify-start">
          <button
            className="mt-6 bg-[#A9A9A9] rounded-md py-2 px-8 text-[#1D1E20] text-sm font-semibold"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

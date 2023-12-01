import Header from "../components/header";

export default function Export() {
  return (
    <div className="h-full w-full flex flex-col bg-[#1D1E20] p-20">
      <Header />
      <div className="my-10 border-t-[1px] border-[#3F3F3F] w-full"></div>
      <div className="flex flex-col items-center">
        <p className="flex flex-row justify-start mt-4 text-[#A9A9A9] w-full">
          Digite o nome do arquivo que será gerado
        </p>
        <div className="flex flex-row justify-start w-full">
          <input
            type="text"
            id="username"
            placeholder="minhas_tarefas"
            className="rounded-md bg-[#232527] h-[40px] my-6 w-[400px] text-[#A9A9A9] py-2 px-4 placeholder-[#4A4D50]"
          />
          <span className="text-[#A9A9A9] font-semibold flex items-center ml-1">
            .json
          </span>
        </div>
      </div>
      <div className="flex justify-start">
        <button className="mt-6 bg-[#FAB600] rounded-md py-2 px-4 text-[#1D1E20] text-sm font-semibold">
          Exportar
        </button>
        <button className="mt-6 ml-6 bg-[#EEEEEE] rounded-md py-2 px-4 text-[#1D1E20] text-sm font-semibold">
          Cancelar
        </button>
      </div>
    </div>
  );
}

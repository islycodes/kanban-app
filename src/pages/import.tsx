import UploadIcon from "../assets/upload";
import Header from "../components/header";

export default function Import() {
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
          />
        </div>
        <div className="flex justify-start">
          <button className="mt-6 bg-[#FAB600] rounded-md py-2 px-4 text-[#1D1E20] text-sm font-semibold">
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

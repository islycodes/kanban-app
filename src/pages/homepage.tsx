import ArrowDownIcon from "@/assets/arrow-down";
import ArrowUpIcon from "@/assets/arrow-up";
import Header from "@/components/header";
import { useState } from "react";

export default function Homepage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full w-full bg-[#1D1E20]">
      <div className="p-20">
        <Header />
        <div className="my-10 border-t-[1px] border-[#3F3F3F] w-full"></div>
        <div className="flex justify-between">
          <p className="text-[#A9A9A9] font-semibold text-xl">Dashboard</p>
          <div className="flex flex-col">
            <div
              onClick={() => setOpen(!open)}
              className="text-[#FAB600] text-lg flex items-center"
            >
              <p className="mr-2">Tarefas Prioritárias</p>
              {open ? (
                <ArrowUpIcon width={12} height={8} />
              ) : (
                <ArrowDownIcon width={12} height={8} />
              )}
            </div>
            {open && <div>dfgdfg</div>}
          </div>
        </div>
        <div className="flex flex-row mt-10">
          <div className="bg-[#EC9CB9] w-[260px]">Não iniciado</div>
          <div className="bg-[#5B97BD] w-[260px] mx-10">Em andamento</div>
          <div className="bg-[#6C9B7D] w-[260px]">Conclusão</div>
        </div>
      </div>
    </div>
  );
}

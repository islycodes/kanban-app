import Header from "../components/header";

export default function AboutUs() {
  return (
    <div className="h-full w-full flex flex-col bg-[#1D1E20] p-20">
      <p className="flex flex-col text-[#A9A9A9] text-2xl">Sobre </p>
      <div className="my-10 border-t-[1px] border-[#3F3F3F] w-full"></div>
      <div className="border-[#3F3F3F] border-[2px] rounded-md p-10 flex flex-col items-center text-[#A9A9A9]">
        <div className="text-justify">
          <p className="mb-2">
            O tema escolhido é direcionado para ajudar os usuários a organizar e
            gerenciar suas atividades diárias de forma eficiente.
          </p>
          <p className="mb-2">
            <span className="text-[#FAB600] font-semibold">
              · Organizar Tarefas:{" "}
            </span>
            Permitir o cadastro de tarefas, facilitando a visualização e
            organização das atividades.{" "}
          </p>
          <p className="mb-2">
            <span className="text-[#FAB600] font-semibold">
              {" "}
              · Acompanhar Progresso:
            </span>{" "}
            Permite visualizar o progresso das tarefas realizadas e pendentes,
            para que os usuários possam avaliar seu desempenho e produtividade.
          </p>
          <p className="mb-2">
            <span className="text-[#FAB600] font-semibold">
              · Facilitar a Edição e Exclusão:
            </span>{" "}
            Permitir a edição e exclusão de tarefas, bem como a adição de novas
            informações conforme necessário, oferecendo flexibilidade na gestão
            das atividades.
          </p>
          <p className="mb-2">
            O objetivo central é proporcionar uma experiência de gerenciamento
            de tarefas intuitiva, prática e eficaz, permitindo que os usuários
            controlem e acompanhem suas atividades diárias de maneira mais
            organizada e produtiva. Além disso, a funcionalidade de
            exportar/importar dados busca oferecer uma forma de backup e
            transferência de informações, aumentando a praticidade e a utilidade
            da aplicação.
          </p>
          <p className="mb-2">
            Ressaltamos que o projeto foi desenvolvido para uma atividade
            avaliativa da disciplina de Tópicos Especiais em Informática, do
            curso de Análise e Desenvolvimento de Sistemas da Faculdade de
            Tecnologia de Ribeirão Preto - São Paulo.
          </p>
          <div className="mt-4">
            <p className="text-[#FAB600] font-semibold">
              Equipe de Desenvolvimento:
            </p>
            <p className="my-2">
              Adrielly Isly <span className="ml-5">RA: 2840482111002</span>
            </p>
            <p className="mb-2">
              Felipe Botelho <span>RA: 2840482111020</span>
            </p>
            <p className="mb-2">
              Igor Marcucci <span className="ml-1">RA: 2840482223009</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

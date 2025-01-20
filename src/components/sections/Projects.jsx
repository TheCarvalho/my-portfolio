import { Section } from "../Section";
import { Titles } from "../Titles";

export const Projects = () => {
  return (
    <Section color="bg-slate-300">
      <div
        id="projects"
        className="max-w-[1080px] mx-auto px-4 py-8 rounded-lg shadow-lg"
      >
        <Titles>Alguns Projetos</Titles>

        <div className="mt-8 space-y-6">
          {/* Pet Club Aconchego */}
          <a
            href="https://thecarvalho.github.io/aconchego-pet-club/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-slate-700 rounded-lg shadow-md hover:bg-slate-800 transition-all"
          >
            <h3 className="text-xl font-semibold text-white">Landing Page</h3>
            <p className="mt-2 text-sm text-gray-200">Pet Club Aconchego</p>
          </a>

          {/* To Do List */}
          <a
            href="https://github.com/TheCarvalho/todo-list/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-slate-700 rounded-lg shadow-md hover:bg-slate-800 transition-all"
          >
            <h3 className="text-xl font-semibold text-white">
              Lista de tarefas
            </h3>
            <p className="mt-2 text-sm text-gray-200">
              Um projeto ainda em desenvolvimento sobre uma lista de tarefas
              usando React, Tailwind e Vite, armazenando as tarefas no
              LocalStorage.
            </p>
          </a>

          {/* Visite Manaus */}
          <a
            href="https://thecarvalho.github.io/visite-manaus/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-slate-700 rounded-lg shadow-md hover:bg-slate-800 transition-all"
          >
            <h3 className="text-xl font-semibold text-white">Turísmo Manaus</h3>
            <p className="mt-2 text-sm text-gray-200">
              Um site turístico sobre a cidade de Manaus usando apenas JS, HTML
              e CSS.
            </p>
          </a>

          {/* My Konoha */}
          <a
            href="https://thecarvalho.github.io/my-konoha/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-slate-700 rounded-lg shadow-md hover:bg-slate-800 transition-all"
          >
            <h3 className="text-xl font-semibold text-white">
              My Konoha 🔧{" "}
              <span className="text-slate-400 text-sm">Em desenvolvimento</span>
            </h3>
            <p className="mt-2 text-sm text-gray-200">
              Um projeto ainda em desenvolvimento sobre uma rede social.
            </p>
          </a>
        </div>
      </div>
    </Section>
  );
};

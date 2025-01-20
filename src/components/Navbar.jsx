export const Navbar = () => {
  return (
    <nav className="bg-slate-500 py-4 px-6 rounded-b-md shadow sticky top-0 z-10">
      <div className="max-w-[1080px] mx-auto flex justify-between items-center">
        <div className="flex justify-between w-full px-4">
          <a href="#" className="text-slate-300 font-bold">Sobre</a>
          <a href="#" className="text-slate-300 font-bold">Habilidades</a>
          <a href="#" className="text-slate-300 font-bold">Projetos</a>
          <a href="#" className="text-slate-300 font-bold">Contato</a>
        </div>
      </div>
    </nav>
  );
};

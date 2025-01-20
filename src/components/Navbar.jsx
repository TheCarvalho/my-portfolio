export const Navbar = () => {
  const estilosLinks = "text-slate-300 font-bold hover:text-slate-50";
  return (
    <nav className="bg-slate-500 py-4 px-6 rounded-b-md shadow fixed top-0 left-0 w-full z-10">
      <div className="max-w-[1080px] mx-auto flex justify-between items-center">
        <div className="flex justify-between w-full px-4">
          <a href="#about" className={estilosLinks}>Sobre</a>
          <a href="#skills" className={estilosLinks}>Habilidades</a>
          <a href="#projects" className={estilosLinks}>Projetos</a>
          <a href="#contact" className={estilosLinks}>Contato</a>
        </div>
      </div>
    </nav>
  );
};
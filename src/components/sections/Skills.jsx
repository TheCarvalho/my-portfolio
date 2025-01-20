import { Section } from "../Section";
import { Titles } from "../Titles";
import { Tile } from "../Tile";

export const Skills = () => {
  const estilo = "w-16 h-16 object-contain";
  return (
    <Section>
      <div id="skills" className="max-w-[1080px] mx-auto px-4">
        <Titles color="text-slate-300">Minhas Habilidades</Titles>

        <div className="grid grid-cols-4 gap-6 mt-6 justify-center">
          <Tile>
            <img src="/my-portfolio/icons/css.svg" alt="Ícone CSS" className={estilo} />
          </Tile>
          <Tile>
            <img src="/my-portfolio/icons/html.svg" alt="Ícone HTML" className={estilo} />
          </Tile>
          <Tile>
            <img
              src="/my-portfolio/icons/javascript.svg"
              alt="Ícone JavaScript"
              className={estilo}
            />
          </Tile>
          <Tile>
            <img
              src="/my-portfolio/icons/typescript.svg"
              alt="Ícone TypeScript"
              className={estilo}
            />
          </Tile>
          <Tile>
            <img src="/my-portfolio/icons/react.svg" alt="Ícone React" className={estilo} />
          </Tile>
          <Tile>
            <img src="/my-portfolio/icons/next.svg" alt="Ícone Next.js" className={estilo} />
          </Tile>
          <Tile>
            <img src="/my-portfolio/icons/sass.svg" alt="Ícone Sass" className={estilo} />
          </Tile>
          <Tile>
            <img
              src="/my-portfolio/icons/tailwindcss.svg"
              alt="Ícone Tailwind CSS"
              className={estilo}
            />
          </Tile>
        </div>
      </div>
    </Section>
  );
};

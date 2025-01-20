import { Section } from "../Section";
import { Titles } from "../Titles";

export const About = () => {
  const estilosLinks = "text py-3 text-slate-600";
  return (
    <Section color="bg-slate-300">
      <div id="about" className="max-w-[1080px] mx-auto px-4">
        <Titles className="">Sobre Mim</Titles>
        <p className={estilosLinks}>
          Olá, sou Abdon Carvalho, um programador frontend em início de
          carreira, apaixonado por desenvolver soluções web modernas e
          eficientes. Minha jornada começou na Faculdade Estácio de Sá, onde
          tive a oportunidade de aprender e explorar diversas tecnologias, como
          HTML, CSS, JavaScript, e ferramentas como React e Next.js.
        </p>
        <p className={estilosLinks}>
          Ao longo do tempo, venho me especializando em desenvolvimento
          frontend, com foco em criar interfaces dinâmicas, responsivas e de
          fácil usabilidade. Tenho experiência no uso de Tailwind CSS e Sass
          para estilização, sempre buscando seguir as melhores práticas de
          design e otimização de performance.
        </p>
        <p className={estilosLinks}>
          Como programador iniciante, estou sempre buscando expandir meus
          conhecimentos, estudando novas tecnologias e frameworks. Tenho um
          interesse crescente por TypeScript, APIs REST e Docker, e estou sempre
          em busca de desafios para melhorar minhas habilidades e aprender de
          forma contínua.
        </p>
        <p className={estilosLinks}>
          Meu objetivo é continuar evoluindo como desenvolvedor, buscando não
          apenas criar produtos de qualidade, mas também oferecer uma
          experiência excepcional para os usuários. Estou aberto a novas
          oportunidades e projetos que me permitam crescer e aplicar minhas
          habilidades para resolver problemas reais
        </p>
      </div>
    </Section>
  );
};

// Arquivo: pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdon Carvalho | Desenvolvedor Frontend</title>
        <meta name="description" content="Portfólio de Abdon Carvalho, desenvolvedor frontend." />
      </Head>

      <main className="bg-gray-50 text-gray-900 font-sans min-h-screen">
        <header className="bg-blue-600 text-white py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Abdon Carvalho</h1>
            <p className="text-xl mt-2">Desenvolvedor Frontend</p>
          </div>
        </header>

        <section id="about" className="py-12 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">Sobre Mim</h2>
            <p>
              Transformando ideias em experiências digitais funcionais e elegantes.
              Graduado em Análise e Desenvolvimento de Sistemas e com sólida experiência em desenvolvimento frontend.
            </p>
          </div>
        </section>

        <section id="experience" className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-8">Experiência Profissional</h2>
            <ul className="space-y-6">
              <li className="bg-white shadow-md p-6 rounded-lg">
                <h3 className="text-xl font-bold">Desenvolvedor Frontend Júnior - Freelancer</h3>
                <p className="text-gray-600">2022 - Hoje</p>
                <p className="mt-2">Desenvolvimento de aplicações web modernas utilizando React e TailwindCSS.</p>
              </li>
              <li className="bg-white shadow-md p-6 rounded-lg">
                <h3 className="text-xl font-bold">Suporte de TI / Auxiliar de Classe - ESP</h3>
                <p className="text-gray-600">2017 - 2019</p>
                <p className="mt-2">Auxílio técnico e suporte em tecnologia educacional.</p>
              </li>
              {/* Adicione outros itens de experiência aqui */}
            </ul>
          </div>
        </section>

        <section id="skills" className="py-12 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-8">Conhecimentos Técnicos</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <span className="bg-blue-600 text-white py-2 px-4 rounded-lg">JavaScript/TypeScript</span>
              <span className="bg-blue-600 text-white py-2 px-4 rounded-lg">React</span>
              <span className="bg-blue-600 text-white py-2 px-4 rounded-lg">Tailwind</span>
              <span className="bg-blue-600 text-white py-2 px-4 rounded-lg">Python</span>
              <span className="bg-blue-600 text-white py-2 px-4 rounded-lg">HTML/CSS</span>
              {/* Adicione mais habilidades conforme necessário */}
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Abdon Carvalho. Todos os direitos reservados.</p>
            <div className="mt-4">
              <a href="https://www.linkedin.com/in/abdoncarvalho/" className="text-blue-400 hover:underline">LinkedIn</a> |
              <a href="mailto:dev.abdoncarvalho@gmail.com" className="text-blue-400 hover:underline"> Email</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

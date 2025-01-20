import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";

import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import { Projects } from "./components/sections/Projects";

export const App = () => {
  return (
    <Section>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects/>
      <Contact />
    </Section>
  );
};

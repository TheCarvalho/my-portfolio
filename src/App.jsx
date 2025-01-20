import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";

import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";

export const App = () => {
  return (
    <Section >
      <Navbar />
      <Home />
      <About/>
      <Contact/>
    </Section>
  );
};


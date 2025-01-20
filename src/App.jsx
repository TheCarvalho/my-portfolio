import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import { Contact } from "./components/Contact";

export const App = () => {
  return (
    <Section>
      <Navbar />
      <Home />
      <About/>
      <Contact/>
    </Section>
    
  );
};


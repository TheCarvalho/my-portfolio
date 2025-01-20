import { Github, Linkedin, Mail } from "lucide-react";
import { Section } from "../Section";
import { Titles } from "../Titles";

export const Contact = () => {
  return (
    <Section>
      <div id="contact" className="max-w-[1080px] mx-auto px-4">
        <Titles color="text-slate-300">Contato</Titles>
        <div className="flex flex-col  justify-center items-center gap-20 mt-6">
          <a
            href="mailto:abdoncarvalho@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-slate-50 flex flex-col items-center"
          >
            <Mail size={48} />
            <span className="mt-2 text-lg">abdoncarvalho@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/abdoncarvalho/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-slate-50 flex flex-col items-center"
          >
            <Linkedin size={48} />
            <span className="mt-2 text-lg">LinkedIn</span>
          </a>
          <a
            href="https://github.com/TheCarvalho"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-slate-50 flex flex-col items-center"
          >
            <Github size={48} />
            <span className="mt-2 text-lg">GitHub</span>
          </a>
        </div>
      </div>
    </Section>
  );
};

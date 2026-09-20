import { ArrowDown, FileDown, Github, Linkedin } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { Reveal } from '@/components/Reveal';

export function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="hero-glow" aria-hidden="true" />

      <div className="container">
        <Reveal>
          <p className="eyebrow">Hola, soy</p>
        </Reveal>

        <Reveal delay={100}>
          <h1>{profile.name}</h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="hero-role">{profile.role}</p>
        </Reveal>

        <Reveal delay={300}>
          <p className="hero-tagline">{profile.tagline}</p>
        </Reveal>

        <Reveal delay={400}>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Ver proyectos
              <ArrowDown aria-hidden="true" />
            </a>
            <a href="/Marcos_Garcia_CV.pdf" download className="button button-secondary">
              Descargar CV
              <FileDown aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub de Marcos Demian Garcia">
              <Github />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Marcos Demian Garcia">
              <Linkedin />
            </a>
          </div>
        </Reveal>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Ir a la sección sobre mí">
        <ArrowDown />
      </a>
    </section>
  );
}

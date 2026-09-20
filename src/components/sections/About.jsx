import { profile } from '@/data/portfolio';
import { Reveal } from '@/components/Reveal';

export function About() {
  return (
    <section id="about" className="section">
      <div className="narrow-container">
        <Reveal>
          <h2><span>// </span>Sobre mí</h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="section-lead">{profile.about}</p>
        </Reveal>

        <Reveal delay={300}>
          <p className="about-secondary">
            Actualmente busco mi primera oportunidad profesional en IT, donde pueda aplicar lo que sé, seguir aprendiendo y contribuir a proyectos reales.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

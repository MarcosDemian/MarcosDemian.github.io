import { GraduationCap, ExternalLink, CircleDot } from 'lucide-react';
import { education } from '@/data/portfolio';
import { Reveal } from '@/components/Reveal';

export function Education() {
  return (
    <section id="education" className="section">
      <div className="narrow-container">
        <Reveal>
          <h2><span>// </span>Formación</h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="section-description">
            Estudios y certificaciones que respaldan mi formación técnica.
          </p>
        </Reveal>

        <div className="education-list">
          {education.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 120}>
              <div className="education-card">
                <div className="education-icon">
                  <GraduationCap aria-hidden="true" />
                </div>

                <div className="education-content">
                  <div className="education-title">
                    <h3>{item.title}</h3>
                    <span>
                      <CircleDot aria-hidden="true" />
                      {item.status}
                    </span>
                  </div>
                  <p>{item.institution}</p>

                  {item.certificateUrl && (
                    <a href={item.certificateUrl} target="_blank" rel="noopener noreferrer">
                      Ver certificado
                      <ExternalLink aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

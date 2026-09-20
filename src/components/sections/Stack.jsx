import { skillCategories } from '@/data/portfolio';
import { Reveal } from '@/components/Reveal';

export function Stack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <Reveal>
          <h2><span>// </span>Stack técnico</h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="section-description">
            Las tecnologías con las que trabajo y construyo proyectos.
          </p>
        </Reveal>

        <div className="stack-grid">
          {skillCategories.map((category, idx) => (
            <Reveal key={category.title} delay={idx * 100}>
              <div className="stack-card">
                <h3>{category.title}</h3>
                <ul>
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

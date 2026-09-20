import { ExternalLink, Github, CircleDot } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { Reveal } from '@/components/Reveal';

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-heading">
        <h3>{project.name}</h3>
        {project.status && (
          <span className="project-status">
            <CircleDot aria-hidden="true" />
            {project.status}
          </span>
        )}
      </div>

      <p className="project-description">{project.description}</p>

      <ul className="tech-tags">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
          <Github aria-hidden="true" />
          Repositorio
        </a>
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink aria-hidden="true" />
            Demo
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <h2><span>// </span>Proyectos</h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="section-description">
            Proyectos reales en los que trabajé, aplicando lo aprendido en formación académica y práctica personal.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <Reveal key={project.name} delay={idx * 120}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

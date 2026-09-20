import { ArrowUpRight } from 'lucide-react';
import { contactLinks } from '@/data/portfolio';
import { Reveal } from '@/components/Reveal';
import { ContactIcon } from '@/components/ContactIcon';

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="narrow-container">
        <Reveal>
          <h2><span>// </span>Contacto</h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="section-description">
            ¿Querés hablar sobre una oportunidad o un proyecto? Escribime.
          </p>
        </Reveal>

        <div className="contact-list">
          {contactLinks.map((link, idx) => (
            <Reveal key={link.href} delay={idx * 100}>
              <a
                href={link.href}
                target={link.icon === 'mail' ? undefined : '_blank'}
                rel={link.icon === 'mail' ? undefined : 'noopener noreferrer'}
                className="contact-card"
              >
                <div className="contact-icon">
                  <ContactIcon icon={link.icon} />
                </div>
                <span>{link.label}</span>
                <ArrowUpRight className="contact-arrow" aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

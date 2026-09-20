import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Marcos Demian Garcia</p>

        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
          <a href={profile.email} aria-label="Email">
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}

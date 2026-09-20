import { Mail, Linkedin, Github } from 'lucide-react';

const iconMap = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
};

export function ContactIcon({ icon, className = '' }) {
  const Icon = iconMap[icon];
  return <Icon className={className} aria-hidden="true" />;
}

export const projects = [
  {
    name: 'Fideos Irene — Omarmen S.A.',
    description:
      'Desarrollo de un sitio web comercial para presentar la marca y su catálogo de fideos laminados al huevo. Los productos se gestionan desde un archivo local, sin API ni base de datos, y el sitio está servido con Node.js y Express.',
    technologies: ['React', 'Vite', 'CSS puro', 'Node.js', 'Express'],
    demoUrl: 'https://fideos-irene.vercel.app/',
  },
  {
    name: 'Match Burguer — Tienda online',
    description:
      'Desarrollo de una tienda web para explorar productos y realizar pedidos que se finalizan por WhatsApp. El frontend en React se comunica con una API en Node.js y Express, que valida los pedidos, administra el estado del local y el stock, y protege el panel de administración mediante inicio de sesión.',
    technologies: ['React', 'Vite', 'CSS puro', 'Node.js', 'Express', 'API REST', 'WhatsApp'],
    demoUrl: 'https://match-burguer-frontend.vercel.app/',
  },
];

export const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'JWT', 'OAuth'],
  },
  {
    title: 'Bases de Datos',
    skills: ['MySQL', 'MongoDB', 'SQL'],
  },
  {
    title: 'Datos & Herramientas',
    skills: ['Python', 'Pandas', 'Git', 'GitHub', 'Figma'],
  },
];

export const education = [
  {
    title: 'Desarrollo Full Stack',
    institution: 'ITBA — Becas Santander',
    status: 'Cursando actualmente',
  },
  {
    title: 'Professional Backend Developer',
    institution: 'Centro de E-Learning UTN',
    status: 'Certificado',
    certificateUrl:
      'https://drive.google.com/file/d/13DtIXtmCaPDwKYk5JoBIHQT-5D0xqRJz/view?usp=sharing',
  },
  {
    title: 'Data Analytics con Python',
    institution: 'Talento Tech',
    status: 'Certificado',
    certificateUrl:
      'https://drive.google.com/file/d/1HbBaou3Nm-PkwFptRNmxvWPrg0lwa0Ke/view?usp=sharing',
  },
];

export const contactLinks = [
  {
    label: 'demiangarcia254@gmail.com',
    href: 'mailto:demiangarcia254@gmail.com',
    icon: 'mail',
  },
  {
    label: 'Marcos Demian Garcia',
    href: 'https://www.linkedin.com/in/marcos-demian-garcia/',
    icon: 'linkedin',
  },
  {
    label: 'MarcosDemian',
    href: 'https://github.com/MarcosDemian',
    icon: 'github',
  },
];

export const profile = {
  name: 'Marcos Demian Garcia',
  role: 'Full Stack Developer',
  tagline:
    'Construyo aplicaciones web con JavaScript, React y Node.js. Me interesa entender cómo funcionan los sistemas y resolver problemas reales con código.',
  about:
    'Soy desarrollador web con formación en desarrollo backend. Trabajo con JavaScript, React, Node.js, APIs REST y bases de datos SQL. He desarrollado proyectos propios aplicando estos conocimientos y tengo interés en seguir aprendiendo nuevas tecnologías y arquitecturas. Me gusta entender cómo funcionan los sistemas, resolver problemas y buscar formas de mejorar lo que estoy construyendo.',
  github: 'https://github.com/MarcosDemian',
  linkedin: 'https://www.linkedin.com/in/marcos-demian-garcia/',
  email: 'mailto:demiangarcia254@gmail.com',
};

export const navLinks = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Formación', href: '#education' },
  { label: 'Contacto', href: '#contact' },
];

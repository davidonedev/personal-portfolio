/**
 * @copyright 2025 David Alves
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  Facebook,
  FileText,
  Globe,
  Home,
  Instagram,
  Layers,
  Mail,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  User,
  Youtube,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Facebook,
    label: 'Facebook',
    link: '/#',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    link: 'https://www.instagram.com/deivaow/?hl=pt-br',
  },
  {
    icon: Youtube,
    label: 'Linkedin',
    link: '/#',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/estetica-capa.jpg',
    title: 'Full stack music app',
    tags: ['Figma', 'Code'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
  {
    imgSrc: '/images/capa-vision.jpg',
    title: 'Full stack music app',
    tags: ['Figma', 'Code'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
  {
    imgSrc: '/images/monoburguer.png',
    title: 'Full stack music app',
    tags: ['Figma', 'Code'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
  {
    imgSrc: '/images/driveb.jpg',
    title: 'Full stack music app',
    tags: ['Figma', 'Code'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
];

const education: ExperienceType[] = [
  {
    year: '06/2023 – 12/2025',
    title: 'Análise e Desenvolvimento de Sistemas',
    institute: 'Centro Universitário UniMetrocamp Wyden',
    desc: 'Lorem ipsum',
  },
  {
    year: '2024 – 2025',
    title: 'Cursos Online',
    institute: 'Alura',
    desc: 'Formação Figma / Formação Design System / Tailwind CSS / React / Javascript / Git e GitHub entre outros...',
  },
];

const experience: ExperienceType[] = [
  {
    year: '06/2024 – o momento',
    title: 'UX Designer & Frontend Developer',
    institute: 'Bosch Brasil',
    desc: 'Atuando na criação e evolução de interfaces modernas, acessíveis e centradas no usuário. Experiência com Design Systems, prototipação de baixa e alta fidelidade no Figma, reutilização de componentes, manutenção de sistemas e colaboração via Azure, sempre alinhando design, usabilidade e qualidade técnica.',
  },

];

const tools: ToolsType[] = [
  {
    label: 'Figma',
    imgSrc: '/images/tools/figma.svg',
  },
  {
    label: 'Photoshop',
    imgSrc: '/images/tools/photoshop.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'TypeScript',
    imgSrc: '/images/tools/type.svg',
  },
  {
    label: 'Azure',
    imgSrc: '/images/tools/azure.png',
  },
  {
    label: 'Git',
    imgSrc: '/images/tools/git.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'Identidade Visual',
    desc: 'Desenvolvo identidades visuais estratégicas e inovadoras, criando soluções que fortalecem a presença e a comunicação de marcas de maneira impactante e memorável.',
    projects: '2 Anos de Experiência',
    icon: <Palette className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'UX Design',
    desc: 'Desenvolvo experiências digitais centradas no usuário, otimizando toda a jornada com design funcional, prototipação e estética para criar uma interação fluida e memorável.',
    projects: '2 Anos de Experiência',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Desenvolvedor Web',
    desc: 'Desenvolvo soluções web responsivas, criando interfaces funcionais e otimizadas, focando na experiência do usuário, performance e acessibilidade em todas as plataformas.',
    projects: '2 Anos de Experiência',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Photoshop',
    desc: 'Crio designs visualmente impactantes no Photoshop, desenvolvendo soluções criativas e refinadas para atender às necessidades específicas de cada projeto.',
    projects: '5 Anos de Experiência',
    icon: <Smartphone className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Figma',
    desc: 'Desenvolvo interfaces digitais no Figma, criando protótipos interativos e soluções de design que garantem uma experiência de usuário intuitiva e eficiente.',
    projects: '2 Anos de Experiência',
    icon: <Rocket className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '05+',
    label: 'Anos com Design ',
  },
  {
    number: '02+',
    label: 'Desenvolvedor Frontend',
  },
  {
    number: '10+',
    label: 'Projetos Realizados',
  },
];


export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
};
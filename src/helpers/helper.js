import { ImGit } from 'react-icons/im';
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoSass,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoInstagram,
} from 'react-icons/io5';
import { SiRedux, SiStorybook, SiTypescript } from 'react-icons/si';
import SuperpeerSVG from '../assets/icons/Superpeer';

export const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://github.com/olcaneristi',
    icon: <IoLogoGithub />,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/ogulcaneristi/',
    icon: <IoLogoLinkedin />,
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@olcaneristi',
    icon: <IoLogoMedium />,
  },
  {
    name: 'Superpeer',
    url: 'https://superpeer.com/ogulcan',
    icon: <SuperpeerSVG />,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/ogulcaanX',
    icon: <IoLogoTwitter />,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/olcaneristi',
    icon: <IoLogoInstagram />,
  },
];

export const navLinks = [
  {
    name: 'Skills',
    url: 'skills',
  },
  {
    name: 'Projects',
    url: 'projects',
  },
  {
    name: 'Contact',
    url: 'contact',
  },
];

export const skillsList = [
  {
    name: 'HTML5',
    icon: <IoLogoHtml5 fill="#f87b45" />,
  },
  {
    name: 'CSS3',
    icon: <IoLogoCss3 fill="#4d81fa" />,
  },
  {
    name: 'JavaScript',
    icon: <IoLogoJavascript fill="#f7df1e" />,
  },
  {
    name: 'SASS',
    icon: <IoLogoSass fill="#cf649a" />,
  },
  {
    name: 'ReactJS',
    icon: <IoLogoReact fill="#61dafb" />,
  },
  {
    name: 'TypeScript *',
    icon: <SiTypescript fill="#3178c6" />,
  },
  {
    name: 'Redux *',
    icon: <SiRedux fill="#764abc" />,
  },
  {
    name: 'Storybook',
    icon: <SiStorybook fill="#FF4785" />,
  },
];

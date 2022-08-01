import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoInstagram,
  IoLogoNodejs
} from 'react-icons/io5';
import { SiSpotify, SiStorybook, SiTypescript, SiExpress } from 'react-icons/si';
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
    url: 'https://twitter.com/olcaneristi',
    icon: <IoLogoTwitter />,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/olcaneristi',
    icon: <IoLogoInstagram />,
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/user/neurtal',
    icon: <SiSpotify />,
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
    name: 'SASS',
    icon: <IoLogoSass fill="#cf649a" />,
  },
  {
    name: 'JavaScript',
    icon: <IoLogoJavascript fill="#f7df1e" />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript fill="#3178c6" />,
  },
  {
    name: 'React',
    icon: <IoLogoReact fill="#61dafb" />,
  },
  {
    name: 'React Native',
    icon: <IoLogoReact fill="#fff" />,
  },
  {
    name: 'Node.js',
    icon: <IoLogoNodejs fill="#6cc24a" />,
  },
  {
    name: 'Express.js',
    icon: <SiExpress />,
  },
  {
    name: 'Storybook',
    icon: <SiStorybook fill="#FF4785" />,
  },
];

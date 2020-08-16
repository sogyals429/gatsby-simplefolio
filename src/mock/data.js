import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sogyal T Sherpa | DevOps Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello my name is',
  name: 'Sogyal T Sherpa',
  subtitle: 'I am a DevOps Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a DevOps Engineer with ',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://tinyurl.com/y3exxqcp', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ansible.png',
    title: 'Ansible Web App',
    info: 'My first ansible project built on Microsoft Azure.',
    info2: 'Deploys a complete flask web application with load balancer and a MySql database',
    repo: 'https://github.com/sogyals429/ansible-web-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tf.png',
    title: 'VPN Server',
    info: 'My first infrastructure project using Terraform built on Amazon Web Services',
    info2: 'A VPN server using OpenVPN',
    repo: 'https://github.com/sogyals429/terraform-aws-vpn', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '1Bank.jpeg',
    title: '1Bank',
    info:
      'Participated in the Accenture Hackathon which focused on the Banking Revolution which refers to areas of transformation that could drastically change the way a bank operates internally for its employees or externally for its consumers.',
    info2:
      '1Bank is an iOS application that hand Control your income and expenses, get smart analysis, all through our seamless user experience. 🌆',
    repo: 'https://github.com/sogyals429/1Bank', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'elab.jpeg',
    title: 'ELab',
    info:
      "Managed to secure the 4th Place 🎉 in RMIT University ITS Hackathon '19 by developing a platform where a user could learn a skill by teaching another skill through the concept of earning points 🚀",
    info2:
      'Skill for skill lets you learn, teach or both - any skill you want, to other people, by the people.',
    url: 'https://elab.gayurug.com/',
    repo: 'https://github.com/sogyals429/eLab', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's do this",
  btn: 'Contact Me',
  email: 'sogyals429@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/sogyalts429',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sogyal-thundup-s-505a22bb/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sogyals429',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

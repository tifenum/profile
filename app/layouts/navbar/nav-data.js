import config from '~/config.json';

export const navLinks = [
  {
    label: 'social life',
    pathname: '/#project-1',
  },
  {
    label: 'Earth',
    pathname: '/#earth',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },

  {
    label: 'Contact',
    pathname: '/contact',
  },

];

export const socialLinks = [
  {
    label: 'Facebook',
    url: `https://facebook.com/${config.facebook}`,
    icon: 'facebook',
  },
  {
    label: 'Codeforces',
    url: `https://codeforces.com/profile/${config.codeforces}`,
    icon: 'codeforces',
  },  
  {
    label: 'Linkedin',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];

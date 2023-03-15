export const linkOptions = [
  { link: 'mailto:didyshen.oleksandr@gmail.com', text: 'Drop an E-Mail' },
  { link: 'https://github.com/alex-dishen', text: 'See my GitHub' },
  {
    link: 'https://www.linkedin.com/in/oleksandr-didyshen/',
    text: 'Visit my Linkedin',
  },
];

export const headerAnimation = {
  hidden: {
    scale: 0.6,
    opacity: 0,
    skewY: 3,
    translateY: 50,
  },
  show: {
    scale: 1,
    opacity: 1,
    skewY: 0,
    translateY: 0,
    transition: { duration: 1, delay: 0.1, ease: 'easeOut' },
  },
};

export const pitchAnimation = {
  hidden: { scale: 0.7, opacity: 0, skewY: 3, translateY: 70 },
  show: {
    scale: 1,
    opacity: 1,
    skewY: 0,
    translateY: 0,
    transition: { duration: 1, delay: 0.5, ease: 'easeOut' },
  },
};

export const cardAnimation = {
  hidden: { scale: 0.7, opacity: 0, skewY: 8, translateY: 90 },
  show: {
    scale: 1,
    opacity: 1,
    skewY: 0,
    translateY: 0,
    transition: { duration: 0.8, delay: 0.7, ease: 'easeOut' },
  },
};

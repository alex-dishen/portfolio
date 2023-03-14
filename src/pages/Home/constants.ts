export const options = [
  {
    page: '/projects',
    variant: 'A',
    text: 'I heard you are creating great websites!',
  },
  {
    page: 'https://medium.com/@oleksandrdidyshen',
    variant: 'B',
    text: 'I like reading about technologies!',
  },
  {
    page: '/about',
    variant: 'C',
    text: 'Oleksandr, who?!',
  },
];

export const homeStyle = {
  hidden: { translateY: 160 },
  show: {
    translateY: 0,
    transition: {
      duration: 2.6,
      delay: 1.4,
    },
  },
};

export const imStyle = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    translateY: 30,
    translateX: 30,
  },
  show: {
    scale: 1,
    opacity: 1,
    translateY: 0,
    translateX: 0,
    transition: { duration: 0.75, delay: 0.1, ease: 'easeOut' },
  },
};

export const imageStyle = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    translateY: 50,
    rotate: 10,
  },
  show: {
    scale: 1,
    opacity: 1,
    translateY: 0,
    rotate: 0,
    transition: {
      duration: 0.65,
      delay: 0.35,
      ease: 'easeOut',
    },
  },
};

export const nameStyle = {
  hidden: { scale: 0.9, opacity: 0, translateY: 40 },
  show: {
    scale: 1,
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.65, delay: 0.55, ease: 'easeOut' },
  },
};

export const positionStyle = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.2, delay: 2.1 } },
};

export const navigationStyle = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 2.6,
    },
  },
};

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export const textStyle = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, delay: 3.45 } },
};

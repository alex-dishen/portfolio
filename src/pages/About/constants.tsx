import { ReactComponent as AWS } from 'assets/languages/aws.svg';
import { ReactComponent as CSS } from 'assets/languages/css3.svg';
import { ReactComponent as GIT } from 'assets/languages/git.svg';
import { ReactComponent as GitHub } from 'assets/languages/github.svg';
import { ReactComponent as GitLab } from 'assets/languages/gitlab.svg';
import { ReactComponent as HTML } from 'assets/languages/html5.svg';
import { ReactComponent as JavaScript } from 'assets/languages/javascript.svg';
import { ReactComponent as NPM } from 'assets/languages/npm.svg';
import { ReactComponent as React } from 'assets/languages/react.svg';
import { ReactComponent as Redux } from 'assets/languages/redux.svg';
import { ReactComponent as SASS } from 'assets/languages/sass.svg';
import { ReactComponent as StyledComponents } from 'assets/languages/styled-components.svg';
import { ReactComponent as TypeScript } from 'assets/languages/typescript.svg';
import { ReactComponent as Vite } from 'assets/languages/vite.svg';
import { ReactComponent as Vitest } from 'assets/languages/vitest.svg';
import { ReactComponent as Figma } from 'assets/languages/figma.svg';

export const languages = [
  { name: 'HTML', picture: <HTML /> },
  { name: 'CSS', picture: <CSS /> },
  { name: 'JavaScript', picture: <JavaScript /> },
  { name: 'TypeScript', picture: <TypeScript /> },
  { name: 'React', picture: <React /> },
  { name: 'React Native', picture: <React /> },
  { name: 'Redux', picture: <Redux /> },
  { name: 'SASS', picture: <SASS /> },
  { name: 'Styled-Components', picture: <StyledComponents /> },
];

export const tools = [
  { name: 'AWS', picture: <AWS /> },
  { name: 'GIT', picture: <GIT /> },
  { name: 'GitHub', picture: <GitHub /> },
  { name: 'GitLab', picture: <GitLab /> },
  { name: 'NPM', picture: <NPM /> },
  { name: 'Vite', picture: <Vite /> },
  { name: 'Vitest', picture: <Vitest /> },
  { name: 'Figma', picture: <Figma /> },
];

export const meetOleksandrAnimation = {
  hidden: { scale: 0.6, opacity: 0, skewY: 3, translateY: 50 },
  show: {
    scale: 1,
    opacity: 1,
    skewY: 0,
    translateY: 0,
    transition: { duration: 0.8, delay: 0.1, ease: 'easeOut' },
  },
};

export const imageAnimation = {
  hidden: { scale: 0.7, opacity: 0, skewY: 8, translateY: 90 },
  show: {
    scale: 1,
    opacity: 1,
    skewY: 0,
    translateY: 0,
    transition: { duration: 0.7, delay: 0.3, ease: 'easeOut' },
  },
};

export const greetingsAnimation = {
  hidden: { scale: 0.8, opacity: 0, skewY: 3, translateY: 50 },
  show: {
    scale: 1,
    opacity: 1,
    skewY: 0,
    translateY: 0,
    transition: { duration: 0.6, delay: 0.6, ease: 'easeOut' },
  },
};

export const pitchAnimation = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.8, ease: 'easeOut' },
  },
};

export const finishedProjectsAnimation = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' },
  },
};

export const experienceAnimation = {
  hidden: finishedProjectsAnimation.hidden,
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.5, ease: 'easeOut' },
  },
};

export const skillsAnimation = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' },
  },
};

export const toolsAnimation = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.6, ease: 'easeOut' },
  },
};

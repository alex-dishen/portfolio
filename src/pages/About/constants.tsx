import uniqid from 'uniqid';
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
  { id: uniqid(), name: 'HTML', picture: <HTML /> },
  { id: uniqid(), name: 'CSS', picture: <CSS /> },
  { id: uniqid(), name: 'JavaScript', picture: <JavaScript /> },
  { id: uniqid(), name: 'TypeScript', picture: <TypeScript /> },
  { id: uniqid(), name: 'React', picture: <React /> },
  { id: uniqid(), name: 'React Native', picture: <React /> },
  { id: uniqid(), name: 'Redux', picture: <Redux /> },
  { id: uniqid(), name: 'SASS', picture: <SASS /> },
  { id: uniqid(), name: 'Styled-Components', picture: <StyledComponents /> },
];

export const tools = [
  { id: uniqid(), name: 'AWS', picture: <AWS /> },
  { id: uniqid(), name: 'GIT', picture: <GIT /> },
  { id: uniqid(), name: 'GitHub', picture: <GitHub /> },
  { id: uniqid(), name: 'GitLab', picture: <GitLab /> },
  { id: uniqid(), name: 'NPM', picture: <NPM /> },
  { id: uniqid(), name: 'Vite', picture: <Vite /> },
  { id: uniqid(), name: 'Vitest', picture: <Vitest /> },
  { id: uniqid(), name: 'Figma', picture: <Figma /> },
];

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

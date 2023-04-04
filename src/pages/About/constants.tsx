import uniqid from 'uniqid';
import { ReactComponent as AWS } from 'assets/images/languages/aws.svg';
import { ReactComponent as CSS } from 'assets/images/languages/css3.svg';
import { ReactComponent as GIT } from 'assets/images/languages/git.svg';
import { ReactComponent as GitHub } from 'assets/images/languages/github.svg';
import { ReactComponent as GitLab } from 'assets/images/languages/gitlab.svg';
import { ReactComponent as HTML } from 'assets/images/languages/html5.svg';
import { ReactComponent as JavaScript } from 'assets/images/languages/javascript.svg';
import { ReactComponent as NPM } from 'assets/images/languages/npm.svg';
import { ReactComponent as React } from 'assets/images/languages/react.svg';
import { ReactComponent as Redux } from 'assets/images/languages/redux.svg';
import { ReactComponent as SASS } from 'assets/images/languages/sass.svg';
import { ReactComponent as StyledComponents } from 'assets/images/languages/styled-components.svg';
import { ReactComponent as TypeScript } from 'assets/images/languages/typescript.svg';
import { ReactComponent as Vite } from 'assets/images/languages/vite.svg';
import { ReactComponent as Vitest } from 'assets/images/languages/vitest.svg';
import { ReactComponent as Figma } from 'assets/images/languages/figma.svg';

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

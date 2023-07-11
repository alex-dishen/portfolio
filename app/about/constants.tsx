import { nanoid } from 'nanoid'
import AWS from 'src/assets/images/languages/aws.svg'
import CSS from 'src/assets/images/languages/css3.svg'
import GIT from 'src/assets/images/languages/git.svg'
import GitHub from 'src/assets/images/languages/github.svg'
import GitLab from 'src/assets/images/languages/gitlab.svg'
import HTML from 'src/assets/images/languages/html5.svg'
import JavaScript from 'src/assets/images/languages/javascript.svg'
import NPM from 'src/assets/images/languages/npm.svg'
import React from 'src/assets/images/languages/react.svg'
import Redux from 'src/assets/images/languages/redux.svg'
import SASS from 'src/assets/images/languages/sass.svg'
import StyledComponents from 'src/assets/images/languages/styled-components.svg'
import TypeScript from 'src/assets/images/languages/typescript.svg'
import Vite from 'src/assets/images/languages/vite.svg'
import Figma from 'src/assets/images/languages/figma.svg'
import Next from 'src/assets/images/languages/next.svg'
import Postman from 'src/assets/images/languages/postman.svg'
import Node from 'src/assets/images/languages/nodejs.svg'
import Express from 'src/assets/images/languages/express.svg'
import Postgres from 'src/assets/images/languages/postgres.svg'

export const front = [
  { id: nanoid(), name: 'HTML', picture: <HTML /> },
  { id: nanoid(), name: 'CSS', picture: <CSS /> },
  { id: nanoid(), name: 'JavaScript', picture: <JavaScript /> },
  { id: nanoid(), name: 'TypeScript', picture: <TypeScript /> },
  { id: nanoid(), name: 'React', picture: <React /> },
  { id: nanoid(), name: 'React Native', picture: <React /> },
  { id: nanoid(), name: 'Redux', picture: <Redux /> },
  { id: nanoid(), name: 'Next', picture: <Next /> },
  { id: nanoid(), name: 'SASS', picture: <SASS /> },
  { id: nanoid(), name: 'Styled-Components', picture: <StyledComponents /> },
]

export const back = [
  { id: nanoid(), name: 'Node.js', picture: <Node /> },
  { id: nanoid(), name: 'Express', picture: <Express /> },
  { id: nanoid(), name: 'PostgreSQL', picture: <Postgres /> },
]

export const tools = [
  { id: nanoid(), name: 'GIT', picture: <GIT /> },
  { id: nanoid(), name: 'Vite', picture: <Vite /> },
  { id: nanoid(), name: 'AWS', picture: <AWS /> },
  { id: nanoid(), name: 'GitHub', picture: <GitHub /> },
  { id: nanoid(), name: 'GitLab', picture: <GitLab /> },
  { id: nanoid(), name: 'NPM', picture: <NPM /> },
  { id: nanoid(), name: 'Postman', picture: <Postman /> },
  { id: nanoid(), name: 'Figma', picture: <Figma /> },
]

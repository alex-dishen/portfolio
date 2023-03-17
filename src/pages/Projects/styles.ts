import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledProjects = styled.main`
  max-width: 850px;
  margin: 50px 30px;
  color: rgb(220, 220, 220);

  * {
    &::selection {
      background-color: rgb(211, 120, 0);
      color: white;
    }
  }

  h1 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 46px;
    font-weight: 800;
  }

  h2 {
    font-size: 38px;
    font-weight: 800;
    margin: 0;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 0px;
  }

  h4 {
    margin-top: 10px;
    font-size: 18px;
    color: rgb(174, 174, 174);
  }

  p {
    margin-top: 7px;
    color: rgb(188, 188, 188);
  }
`;

export const ProjectHolder = styled.div`
  margin-bottom: 50px;
`;

export const ProjectInfo = styled.div`
  line-height: 29px;
  white-space: pre-wrap;
  text-align: justify;
`;

export const ProjectLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

export const Link = styled.a`
  padding: 8px 18px;
  font-size: 14px;
  border: 2px solid rgb(42, 42, 42);
  border-radius: 15px;
  background-color: inherit;
  color: rgb(194, 194, 194);
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: white;
    border-color: rgb(70, 70, 70);
  }
`;

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DotsWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 22px;
  margin-top: 50px;
`;

export const Dot = styled.div`
  aspect-ratio: 1 / 1;
  height: 7px;
  background-color: white;
  border-radius: 50%;
`;

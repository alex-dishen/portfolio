import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IImageHolder } from 'components/Navbar/interfaces';

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const StyledNavbar = styled(motion.nav)`
  position: fixed;
  z-index: 4;
  bottom: -5px;
  display: flex;
  gap: 12px;
  height: fit-content;

  @media (min-width: 850px) {
    flex-direction: column;
    top: 50%;
    left: 30px;
  }
`;

// This custom element is needed to prevent the error that occurs if using
// styled-components, framer motion and custom property
const CustomGamePage = ({
  glowingColor,
  to,
  children,
  ...rest
}: IImageHolder) => (
  <Link to={to} {...rest}>
    {children}
  </Link>
);

export const ImageHolder = styled(CustomGamePage)<IImageHolder>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47px;
  height: 47px;
  transform: translateZ(0);
  border-radius: 12px;
  overflow: hidden;

  svg {
    height: 26px;
    transition: 0.4s;
  }

  &:hover {
    svg {
      fill: white;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
  }

  &::before {
    width: 200%;
    height: 200%;
    background: conic-gradient(${({ glowingColor }) => glowingColor});
    animation: 6s ${rotate} linear infinite;
  }

  &::after {
    inset: 0;
    padding: 1.3px;
    background: black;
    border-radius: 12px;
    background-clip: content-box;
  }
`;

export const Overflow = styled.div`
  position: fixed;
  z-index: 3;
  bottom: 0;
  height: 90px;
  width: 100vw;
  background-image: linear-gradient(to bottom, transparent, black);
`;

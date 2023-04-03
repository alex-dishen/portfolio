import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { ImageHolderTypes, StyledNavbarTypes } from 'components/Navbar/types';

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const showFromBottom = keyframes`
  0% {
    transform: translateY(90px);
  }
  10% {
    opacity: 1;
    transform: translateY(70px);
  }
  100% {
    opacity: 1;
    transform: translateY(-50%);
  }
`;

const showFromLeft = keyframes`
  0% {
    transform: translateX(-90px) translateY(-50%);
  }
  10% {
    opacity: 1;
    transform: translateX(-70px) translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0px) translateY(-50%);
  }
`;

export const StyledNavbar = styled.nav<StyledNavbarTypes>(
  ({ isMobile, delay }) => css`
    position: fixed;
    z-index: 4;
    bottom: -5px;
    display: flex;
    gap: 12px;
    height: fit-content;

    opacity: 0;
    animation: ${isMobile ? showFromBottom : showFromLeft} 2s ease-out forwards
      ${delay}s;

    @media (min-width: 850px) {
      flex-direction: column;
      top: 50%;
      left: 30px;
    }
  `
);

export const ImageHolder = styled(Link)<ImageHolderTypes>`
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

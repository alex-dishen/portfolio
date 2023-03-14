import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const StyledHome = styled(motion.main)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: rgb(194, 194, 194);

  &::after,
  &::before {
    content: '';
    position: absolute;
    filter: blur(35px);
  }

  &::before {
    width: 480px;
    height: 360px;
    margin-left: -400px;
    background: linear-gradient(
      to bottom right,
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0.3)
    );
    border-radius: 50%;
  }

  &::after {
    height: 200px;
    width: 260px;
    bottom: 50%;
    left: 50%;
    background: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
  }
`;

export const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopGreeting = styled(motion.div)`
  display: flex;
  gap: 10px;
`;

export const Header = styled(motion.h1)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px;
  font-size: 50px;
  font-weight: 300;
`;

export const ImageHolder = styled(motion.div)`
  position: relative;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;

  img {
    position: absolute;
    top: 55px;
    left: -9px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: scale(2.4);
    filter: brightness(1.1);
  }
`;

export const NavigationSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Option = styled(motion.div)`
  z-index: 2;
`;

export const NavigationLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 20px 24px;
  color: rgb(194, 194, 194);
  font-size: 14px;
  border: 2px solid rgb(40, 40, 40);
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: white;
    border-color: rgb(70, 70, 70);

    svg {
      transform: translateX(25px);
    }
  }

  p {
    margin: 0;
  }

  span {
    color: rgb(97, 97, 97);
    margin-right: 15px;
  }

  svg {
    height: 22px;
    width: 22px;
    transition: 0.5s;
  }

  svg:first-child {
    position: absolute;
    left: -25px;
    fill: white;
  }
`;

export const ArrowContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 25px;
  overflow: hidden;
`;

export const Text = styled(motion.div)`
  display: flex;
  font-size: 13px;

  a {
    position: relative;
    margin-left: 2px;
    color: rgb(194, 194, 194);
    text-decoration: none;
    cursor: pointer;

    &:hover {
      div {
        background-color: rgb(194, 194, 194);
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  position: relative;
  cursor: pointer;
  transition: text-shadow 0.5s;

  &::after {
    position: absolute;
    content: ' ';
    left: 0;
    height: 1.5px;
    width: 100%;
    background-color: rgb(255, 255, 255, 0.64);
    transform: scaleX(0) translateY(20px);
    transform-origin: right;
    transition: transform 0.5s;
  }

  &:hover {
    text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.864);
    &::after {
      transform: scaleX(1) translateY(20px);
      transform-origin: left;
    }
  }
`;

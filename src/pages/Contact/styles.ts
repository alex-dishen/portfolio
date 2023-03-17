import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const topToBottom = keyframes`
  0% {
    transform: translateY(-40px);
  }
  50% {
    transform: translateY(200px);
  }
  100% {
    transform: translateY(-40px);
  }
`;

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.6);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledContact = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 20px 100px 20px;
  gap: 40px;
  color: rgb(194, 194, 194);

  * {
    &::selection {
      background-color: #74009e;
      color: white;
    }
  }

  p {
    margin: 0;
  }

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
      rgba(188, 1, 255, 0),
      rgba(188, 1, 255, 0),
      rgba(188, 1, 255, 0.3)
    );
    border-radius: 50%;
    animation: ${topToBottom} 15s linear infinite;
  }

  &::after {
    height: 200px;
    width: 260px;
    bottom: 50%;
    left: 50%;
    background: radial-gradient(rgba(188, 1, 255, 0.4), rgba(188, 1, 255, 0));
    animation: ${scale} 7s linear infinite;
  }

  @media (max-width: 600px) {
    &::after {
      height: 110px;
      width: 170px;
    }
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    z-index: 2;
  }

  h1 {
    font-size: 45px;
    font-weight: 400;

    @media (max-width: 600px) {
      font-size: 38px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 24px;

    p {
      text-align: center;
    }

    & p:nth-child(2) {
      margin-top: 8px;
    }
  }
`;

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px 80px;
  border: 2px solid rgb(28, 28, 28);
  border-radius: 20px;

  * {
    z-index: 2;
  }
`;

export const ImageHolder = styled.div`
  position: relative;
  height: 140px;
  width: 140px;
  border-radius: 50%;
  overflow: hidden;

  img {
    position: absolute;
    top: 70px;
    left: -12px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: scale(2.4);
    filter: brightness(1.1);
  }

  @media (max-width: 600px) {
    height: 100px;
    width: 100px;

    img {
      top: 50px;
      left: -8px;
    }
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & p:nth-child(2) {
    color: rgb(130, 130, 130);
  }
`;

export const ContactsWrapper = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Option = styled.a`
  padding: 14px 18px;
  font-size: 14px;
  border: 2px solid rgb(42, 42, 42);
  border-radius: 18px;
  background-color: inherit;
  color: rgb(150, 150, 150);
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: white;
    border-color: rgb(70, 70, 70);
  }
`;

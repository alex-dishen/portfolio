import styled, { keyframes } from 'styled-components';

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
  gap: 40px;
  color: white;

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
    animation: ${topToBottom} 20s linear infinite;
  }

  &::after {
    height: 200px;
    width: 260px;
    bottom: 50%;
    left: 50%;
    background: radial-gradient(rgba(188, 1, 255, 0.4), rgba(188, 1, 255, 0));
    animation: ${scale} 10s linear infinite;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & p:nth-child(3) {
    margin-top: 8px;
  }

  h1 {
    font-size: 45px;
    font-weight: 400;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 60px;
  border: 2px solid rgb(28, 28, 28);
  border-radius: 20px;
`;

export const ImageHolder = styled.div`
  position: relative;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  overflow: hidden;

  img {
    position: absolute;
    top: 7%;
    left: 9px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: scale(2);
    filter: brightness(1.5);
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
  gap: 15px;
`;

export const Option = styled.div`
  padding: 14px 18px;
  font-size: 14px;
  border: 2px solid rgb(28, 28, 28);
  border-radius: 17px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: rgb(97, 97, 97);
    border-color: rgb(37, 37, 37);
  }
`;

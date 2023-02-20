import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHome = styled.section`
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

  h1 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px;
    font-size: 50px;
    font-weight: 300;
  }
`;

export const ImageHolder = styled.div`
  position: relative;
  height: 110px;
  width: 110px;
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
    filter: brightness(1.15);
  }
`;

export const NavigationSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Option = styled(Link)`
  z-index: 2;
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
      fill: white;
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
    transition: 0.3s;
  }
`;

export const Text = styled.div`
  display: flex;
  font-size: 12px;

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

export const Underline = styled.div`
  position: absolute;
  bottom: -2px;
  height: 1px;
  width: 100%;
  background-color: rgb(37, 37, 37);
`;

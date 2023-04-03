import styled, { css, keyframes } from 'styled-components';
import { IIsVisibleValue } from 'components/Dots/types';

export const moveUp = keyframes`
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const DotsWrapper = styled.div<IIsVisibleValue>(
  ({ isVisible }) => css`
    display: flex;
    justify-content: center;
    gap: 22px;

    opacity: 0;
    transform: translateY(50px);
    animation: ${isVisible ? moveUp : ''} 0.8s ease-out forwards 0.8s;
  `
);

export const Dot = styled.div`
  aspect-ratio: 1 / 1;
  height: 7px;
  background-color: white;
  border-radius: 50%;
`;

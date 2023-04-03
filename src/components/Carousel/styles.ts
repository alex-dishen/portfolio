import styled, { css, keyframes } from 'styled-components';
import { IIsVisibleValue } from 'components/Carousel/types';

export const moveUp = keyframes`
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const CarouselWrapper = styled.div<IIsVisibleValue>(
  ({ isVisible }) => css`
    position: relative;
    aspect-ratio: 1.77 / 1;
    width: 100%;
    background-color: rgb(46, 46, 46);
    border-radius: 30px;
    overflow: hidden;
    grid-area: images;

    opacity: 0;
    transform: translateY(50px);
    animation: ${isVisible ? moveUp : ''} 1.2s ease-out forwards 0.35s;

    svg {
      height: 50px;
      width: 50px;
      fill: white;
    }

    button {
      z-index: 2;
      position: absolute;

      &:last-child {
        right: 0;
      }
    }

    .dots-wrapper {
      position: absolute;
      bottom: 10px;
      gap: 13px !important;
      padding: 14px 18px;

      background-color: rgb(15, 16, 17);
      border-radius: 10px;

      @media (max-width: 600px) {
        top: 83%;
        padding: 10px 18px;
      }
    }
  `
);

export const ImageHolder = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const Image = styled.img`
  height: 100%;
  min-width: 100%;
  object-fit: cover;
`;

export const Dot = styled.div`
  height: 9px;
  width: 9px;
  background-color: rgb(140, 140, 140);
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 600px) {
    height: 6px;
    width: 6px;
  }
`;

export const ActiveDot = styled.div`
  height: 11px;
  width: 11px;
  background-color: rgba(255, 145, 1, 1);
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 600px) {
    height: 9px;
    width: 9px;
  }
`;

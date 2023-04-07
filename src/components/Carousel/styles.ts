import styled, { css } from 'styled-components';
import { CarouselWrapperTypes } from 'components/Carousel/types';
import { moveUp } from 'components/Carousel/animations';

export const CarouselWrapper = styled.div<CarouselWrapperTypes>(
  ({ isVisible }) => css`
    position: relative;
    aspect-ratio: 1.77 / 1;
    width: 100%;
    border-radius: 30px;
    overflow: hidden;

    opacity: 0;
    transform: translateY(50px);
    animation: ${isVisible ? moveUp : ''} 1.2s ease-out forwards 0.35s;

    svg {
      height: 50px;
      width: 50px;
      fill: white;
    }

    .left-button {
      position: absolute;
      height: 100%;
      right: -5px;
    }

    .right-button {
      z-index: 2;
      position: absolute;
      height: 100%;
      left: -5px;
    }

    .dots-wrapper {
      position: absolute !important;
      bottom: 10px;
      gap: 13px !important;
      padding: 14px 18px;
      background-color: rgb(15, 16, 17);
      border-radius: 13px;
    }

    @media (max-width: 600px) {
      svg {
        height: 30px;
        width: 30px;
      }

      .dots-wrapper {
        gap: 10px !important;
        bottom: 5px;
        padding: 10px 15px;
        border-radius: 10px;
      }
    }
  `
);

export const ImageHolder = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
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

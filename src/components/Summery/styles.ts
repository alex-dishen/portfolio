import styled, { css } from 'styled-components';
import { TextTypes } from 'components/Summery/types';

export const Text = styled.p<TextTypes>(
  ({ isShowSummery }) => css`
    max-height: ${isShowSummery ? '500px' : '85px'};
    margin: 7px 0 0 0;
    overflow: hidden;
    transition: max-height 1s ease-in-out;
  `
);

export const SVGHolder = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;

  svg {
    height: 25px;
    width: 25px;
    fill: white;
  }
`;
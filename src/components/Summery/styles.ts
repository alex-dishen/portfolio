import styled, { css } from 'styled-components';
import { IText } from 'components/Summery/interfaces';

export const Text = styled.p<IText>(
  ({ isShowSummery }) => css`
    height: ${isShowSummery ? 'fit-content' : '85px'};
    margin: 7px 0 0 0;
    overflow: hidden;
    transition: all 2s;
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

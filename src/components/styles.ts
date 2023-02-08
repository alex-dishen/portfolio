import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  position: fixed;
  bottom: 12px;
  left: 50%;
  height: fit-content;
  display: flex;
  gap: 12px;
  padding: 12px;
  background-color: rgb(30, 30, 30);
  border-radius: 15px;
  transform: translateX(-50%);

  @media (min-width: 840px) {
    flex-direction: column;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
  }
`;

export const ImageHolder = styled(Link)`
  height: 40px;
  width: 40px;
  background-color: rgb(13, 13, 13);
  border-radius: 10px;
  cursor: pointer;
`;

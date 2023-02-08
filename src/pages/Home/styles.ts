import styled from 'styled-components';

export const StyledHome = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: rgb(194, 194, 194);
`;

export const Greeting = styled.div``;

export const NavigationSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Option = styled.div`
  padding: 20px 24px;
  font-size: 14px;
  border: 2px solid rgb(28, 28, 28);
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: rgb(97, 97, 97);
    border-color: rgb(37, 37, 37);
  }

  span {
    color: rgb(97, 97, 97);
    margin-right: 15px;
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

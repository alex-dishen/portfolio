import styled from 'styled-components';

export const StyledHome = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: rgb(194, 194, 194);

  &::before {
    background: linear-gradient(
      to bottom right,
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0.3)
    );
    border-radius: 50%;
    width: 480px;
    height: 360px;
    margin-left: -400px;
  }

  &::after {
    bottom: 50%;
    left: 50%;
    background: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
    width: 260px;
    height: 200px;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    filter: blur(35px);
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
    font-size: 50px;
    font-weight: 300;
    margin: 10px;
  }
`;

export const ImageHolder = styled.div`
  height: 65px;
  width: 65px;
  background-color: white;
  border-radius: 50%;
`;

export const NavigationSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// .thirteen {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 75px;
//   height: 75px;
//   padding: 25px 10px;
//   margin-left: 16px;
//   transform: translateZ(0);
//   border-radius: var(--border-radius);
//   overflow: hidden;
//   box-shadow: 0px 2px 8px -1px #0000001a;
// }

// .thirteen::before,
// .thirteen::after {
//   content: '';
//   position: absolute;
//   z-index: -1;
// }

// /* Conic Gradient Animation */
// .thirteen::before {
//   animation: 6s rotate linear infinite;
//   width: 200%;
//   height: 200%;
//   background: var(--tile-border);
// }

// /* Inner Square */
// .thirteen::after {
//   inset: 0;
//   padding: 1px;
//   border-radius: var(--border-radius);
//   background: linear-gradient(
//     to bottom right,
//     rgba(var(--tile-start-rgb), 1),
//     rgba(var(--tile-end-rgb), 1)
//   );
//   background-clip: content-box;
// }

export const Option = styled.div`
  position: relative;
  /* padding: 20px 24px;
  font-size: 14px;
  border: 2px solid rgb(28, 28, 28);
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  padding: 25px 10px;
  margin-left: 16px;
  transform: translateZ(0);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 2px 8px -1px #0000001a;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    animation: 6s rotate linear infinite;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      #00000080,
      #00000040,
      #00000030,
      #00000020,
      #00000010,
      #00000010,
      #00000080
    );
  }

  &::after {
    inset: 0;
    padding: 1px;
    border-radius: 12px;
    background: linear-gradient(
      to bottom right,
      rgba(2, 13, 46, 1),
      rgba(2, 5, 19, 1)
    );
    background-clip: content-box;
  }

  /* &:hover {
    color: rgb(97, 97, 97);
    border-color: rgb(37, 37, 37);
  }

  span {
    color: rgb(97, 97, 97);
    margin-right: 15px;
  } */
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

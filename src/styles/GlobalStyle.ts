import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle`
  html {
    background-color: black;
  }

  #root {
    font-family: Manrope, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }
`;

export default GlobalStyle;

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

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(108, 108, 108);
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(155, 155, 155);
  }
`;

export default GlobalStyle;

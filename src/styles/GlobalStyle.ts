import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
    box-sizing: border-box;
  }

  body{
    display: block;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

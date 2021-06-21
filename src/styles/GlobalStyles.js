import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-family: "DM sans", sans-serif;
  }

  body {
    font-family: "DM sans", sans-serif;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.black};
    color:${({ theme }) => theme.colors.white}
  }

  a,
  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;

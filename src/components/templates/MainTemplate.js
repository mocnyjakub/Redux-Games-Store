import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import theme from "../../styles/theme";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 23vw 1fr;
  grid-template-rows: 10vh 1fr;
`;

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainWrapper>{children}</MainWrapper>
    </ThemeProvider>
  );
};

export default MainTemplate;

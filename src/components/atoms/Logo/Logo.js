import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledH2 = styled(Link)`
  letter-spacing: 5px;
  line-height: 1px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 1.5rem;
`;

const Logo = ({ children, path }) => {
  return <StyledH2 to={path}>{children}</StyledH2>;
};

export default Logo;

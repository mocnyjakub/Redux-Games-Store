import React from "react";
import { StyledLink } from "./StyledNavBarkLink";

const NavBarLink = ({ children, path }) => {
  return <StyledLink to={path}>{children}</StyledLink>;
};

export default NavBarLink;

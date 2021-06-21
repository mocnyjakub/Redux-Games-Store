import React from "react";
import Logo from "../../atoms/Logo/Logo";
import NavBarLink from "../../atoms/Link/NavBarLink";
import { paths } from "../../../paths";
import { Header, LoginWrapper } from "./StyledNavBar";
import Cart from "../../atoms/Cart/Cart";

const NavBar = ({ openCartModal }) => {
  return (
    <Header>
      <Logo path={paths.HOME}>GAMES.IO</Logo>
      <input type="text" placeholder="Search games" />
      <LoginWrapper>
        <NavBarLink path={paths.HOME}>LOG IN</NavBarLink>
        <NavBarLink path={paths.HOME}>SIGN UP</NavBarLink>
        <Cart />
      </LoginWrapper>
    </Header>
  );
};

export default NavBar;

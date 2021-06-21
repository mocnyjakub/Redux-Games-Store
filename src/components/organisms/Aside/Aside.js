import React from "react";
import AsideLink from "../../atoms/Link/AsideLink";
import { paths } from "../../../paths";
import { AsideWrapper } from "./StyledAside";

const Aside = () => {
  return (
    <AsideWrapper>
      <ul>
        <AsideLink path={paths.HOME}>Home</AsideLink>
        <AsideLink path={paths.CONTACT}>Contact</AsideLink>
        <AsideLink path={paths.PRODUCTS}>Products</AsideLink>
      </ul>
    </AsideWrapper>
  );
};

export default Aside;

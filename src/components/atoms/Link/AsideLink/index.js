import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active-link";

const StyledAsideLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 24px;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  &.${activeClassName} {
    color: #666;
  }
`;

const AsideLink = ({ children, path }) => {
  return (
    <li>
      <StyledAsideLink exact to={path}>
        {children}
      </StyledAsideLink>
    </li>
  );
};

export default AsideLink;

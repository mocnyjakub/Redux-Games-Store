import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    opacity: 0;
    transition: all 0.1s ease-in;
  }
  &:hover::after {
    opacity: 1;
  }
`;

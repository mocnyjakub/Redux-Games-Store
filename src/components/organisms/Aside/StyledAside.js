import styled from "styled-components";
export const AsideWrapper = styled.aside`
  display: grid;
  grid-column: 1/2;
  grid-row: 2/3;
  padding-left: 2rem;
  li {
    list-style: none;
    font-size: 24px;
  }
  li:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

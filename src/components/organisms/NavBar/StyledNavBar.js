import styled from "styled-components";
import search from "../../../assets/icons/search.svg";
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 2rem;
  grid-column: 1/3;
  grid-row: 1/2;
  input {
    flex-basis: 40%;
    border-radius: 24px;
    height: 80%;
    border: none;
    outline: none;
    padding-left: 3rem;
    background-image: url(${search});
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: 1rem center;
    background-color: hsla(0, 0%, 100%, 0.16);
    transition: all ease-in-out 0.4s;
    &::placeholder {
      font-family: "Dm Sans";
      color: #fff;
    }
    &:hover,
    &:focus {
      background-color: hsla(0, 100%, 100%);
      color: #000;
    }
    &:hover::placeholder,
    &:focus::placeholder {
      color: #000;
    }
  }
`;
export const LoginWrapper = styled.div`
  display: flex;
  flex-basis: 20%;
  justify-content: space-evenly;
  align-items: center;
`;

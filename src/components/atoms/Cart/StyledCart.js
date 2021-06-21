import styled from "styled-components";

export const CartWrapper = styled.div`
  cursor: pointer;
  position: relative;
`;

export const ShoppingCartCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  font-size: 14px;
  width: 24px;
  height: 24px;
  background-color: hsla(0, 0%, 100%, 0.16);
  color: #fff;
  border-radius: 100%;
  top: 0;
  left: 0;
  transform: translateX(120%);
`;

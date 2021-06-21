import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { openCartModal } from "../../../Redux/Acions";
import { connect } from "react-redux";
import { CartWrapper, ShoppingCartCounter } from "./StyledCart";
const Cart = ({ openCartModal, productsInCart }) => {
  const countNumberOfProductsInCart = (productsInCart) => {
    const sum = productsInCart.reduce(
      (acc, { inCartQuantity }) => acc + inCartQuantity,
      0
    );
    return sum;
  };
  return (
    <CartWrapper>
      <ShoppingCartIcon onClick={openCartModal} />
      <ShoppingCartCounter>
        <span>{countNumberOfProductsInCart(productsInCart)}</span>
      </ShoppingCartCounter>
    </CartWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openCartModal: () => dispatch(openCartModal()),
});
const mapStateToProps = (state) => ({
  productsInCart: state.cartProducuts,
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

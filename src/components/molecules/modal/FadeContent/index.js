import React, { useEffect } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {
  calculateCartTotal,
  closeCartModal,
  deleteProductInCart,
  increaseProductQuantity,
} from "../../../../Redux/Acions";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    cursor: `pointer`,
    "&:hover": {
      transform: `scale(1.2)`,
    },
  },
});

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 2rem 0;

  img {
    height: 80px;
    object-fit: contain;
  }
  .content_wrapper {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-evenly;
  }
  /* span {
    margin-right: 1rem;
  } */
`;
const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FadeContent = ({
  productsInCart,
  closeCartModal,
  deleteCartProduct,
  cartTotal,
  calculateCartTotalFn,
  increaseCartProductQuantity,
}) => {
  const calculateCartTotal = () => {
    let tempCartTotal = 0;

    productsInCart.forEach(({ price, inCartQuantity }) => {
      tempCartTotal += price * inCartQuantity;
    });

    calculateCartTotalFn(tempCartTotal.toFixed(2));
  };

  useEffect(() => {
    calculateCartTotal();
  }, [productsInCart]);

  const renderEmptyCart = () => (
    <>
      <h1>Your Cart</h1>
      <h2>Cart is empty</h2>
      <Button
        onClick={closeCartModal}
        variant="contained"
        color="primary"
        endIcon={<AddShoppingCartIcon />}
      >
        Continue to shopping
      </Button>
    </>
  );

  const renderProductsInCart = () => {
    return productsInCart.map(
      ({ id, image, name, inCartQuantity, productQuantity, price }) => (
        <>
          <Wrapper id={id}>
            <img src={image} alt={name} />
            <div className="content_wrapper">
              <span>{name}</span>
              <ButtonGroup
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
              >
                <Button>
                  <RemoveIcon />
                </Button>
                <Button disableFocusRipple="false">{inCartQuantity}</Button>
                <Button onClick={() => increaseCartProductQuantity(id)}>
                  <AddIcon />
                </Button>
              </ButtonGroup>
              <span>{price}$</span>
              <DeleteForeverIcon
                className={classes.button}
                onClick={() => deleteCartProduct(id)}
              />
            </div>
          </Wrapper>
        </>
      )
    );
  };

  const calculateTotalPriceInCart = (productsInCart) => {
    // Uwaga- 0 jako trzeci argument w callbacku
    const sum = productsInCart.reduce(
      (acc, { price, inCartQuantity }) => acc + price * inCartQuantity,
      0
    );
    return sum;
  };
  const classes = useStyles();
  return (
    <>
      {productsInCart.length ? renderProductsInCart() : renderEmptyCart()}
      {productsInCart.length ? (
        // <span>
        //   Total Price: {calculateTotalPriceInCart(productsInCart).toFixed(2)}$
        // </span>

        <span>Total Price: {cartTotal}$</span>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  productsInCart: state.cartProducuts,
  cartTotal: state.cartTotal,
});
const mapDispatchToProps = (dispatch) => ({
  closeCartModal: () => dispatch(closeCartModal()),
  deleteCartProduct: (id) => dispatch(deleteProductInCart(id)),
  increaseCartProductQuantity: (id) => dispatch(increaseProductQuantity(id)),
  calculateCartTotalFn: (total) => dispatch(calculateCartTotal(total)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FadeContent);

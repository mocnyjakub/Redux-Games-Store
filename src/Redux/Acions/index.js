import { actionTypes } from "../ActionsTypes";

export const openCartModal = () => ({
  type: actionTypes.OPEN_CART_MODAL,
});

export const closeCartModal = () => ({
  type: actionTypes.CLOSE_CART_MODAL,
});

export const addProductToCart = (product) => ({
  type: actionTypes.ADD_PRODUCT_TO_CART,
  payload: product,
});

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

export const deleteProductInCart = (id) => ({
  type: actionTypes.DELETE_PRODUCT_IN_CART,
  payload: id,
});
export const increaseProductQuantity = (id) => ({
  type: actionTypes.INCREASE_PRODUCT_QUANTITY,
  payload: id,
});

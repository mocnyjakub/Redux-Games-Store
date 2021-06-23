import products from "../../products";
import { actionTypes } from "../ActionsTypes";
const initialState = {
  products: [...products],
  isCartModalOpen: false,
  cartProducuts: [],
  cartTotal: 0,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.OPEN_CART_MODAL:
      return {
        ...state,
        isCartModalOpen: true,
      };
    case actionTypes.CLOSE_CART_MODAL:
      return {
        ...state,
        isCartModalOpen: false,
      };
    case actionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartProducuts: [...new Set([...state.cartProducuts, payload])],
      };

    case actionTypes.DELETE_PRODUCT_IN_CART:
      const arrayWithFilteredProducts = state.cartProducuts.filter(
        (product) => product.id !== payload
      );
      return {
        ...state,
        cartProducuts: [...new Set([...arrayWithFilteredProducts])],
      };

    case actionTypes.INCREASE_PRODUCT_QUANTITY:
      const arrayWithIncreasedProductsQuantity = state.cartProducuts.map(
        (product) =>
          product.id === payload
            ? {
                ...product,
                inCartQuantity: product.inCartQuantity + 1,
              }
            : product
      );
      return {
        ...state,
        cartProducuts: [...new Set([...arrayWithIncreasedProductsQuantity])],
      };

    case actionTypes.CALCULATE_CART_TOTAL:
      return {
        ...state,
        cartTotal: payload,
      };
    default:
      return state;
  }
};

export default reducer;

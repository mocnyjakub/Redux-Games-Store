import products from "../../products";
import { actionTypes } from "../ActionsTypes";
const initialState = {
  products: [...products],
  isCartModalOpen: false,
  cartProducuts: [],
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
    default:
      return state;
  }
};

export default reducer;

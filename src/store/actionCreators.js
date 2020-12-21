import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./actionTypes";

//add the book to cart...
export const addToCart = (book) => (dispatch) => {
  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: {
      ...book,
    },
  });
};

//remove book from cart...
export const removeFromCart = (book) => (dispatch) => {
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: {
      ...book,
    },
  });
};

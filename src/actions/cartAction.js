import { ADD_TO_CART, REMOVE_FROM_CART, SHOW_CART, HIDE_CART } from "./types";

export const addToCart = (payload) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: payload
    });
}

export const removeFromCart = (payload) => dispatch => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: payload
    });
}

export const showCart = () => dispatch => {
    dispatch({
        type: SHOW_CART
    });
}

export const hideCart = () => dispatch => {
    dispatch({
        type: HIDE_CART
    });
}
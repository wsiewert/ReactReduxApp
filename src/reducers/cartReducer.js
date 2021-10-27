import { ADD_TO_CART, REMOVE_FROM_CART, SHOW_CART, HIDE_CART } from "../actions/types";

const initialState = {
    items: [],
    showCart: false
}

const cart = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {...state, items: [...state.items, action.payload]}
        case REMOVE_FROM_CART:
            return state;
        case SHOW_CART:
            return {...state, showCart: true}
        case HIDE_CART:
            return {...state, showCart: false}
        default:
            return state;
    }
}

export default cart;
import { FETCH_PRODUCTS } from "./types";

export const fetchProducts = () => dispatch => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => 
            dispatch({
            type: FETCH_PRODUCTS,
            payload: json
        })
    );
}
import { combineReducers } from "redux";
import productsReducer from "./productsReducer"
import categoryReducer from "./categoriesReducer"

export default combineReducers({
    products: productsReducer,
    categories: categoryReducer
});
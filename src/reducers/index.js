import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import categoryReducer from "./categoriesReducer";
import cartReducer from "./cartReducer";
import sortOrderReducer from "./sortOrderReducer";

export default combineReducers({
    products: productsReducer,
    categories: categoryReducer,
    cart: cartReducer,
    sort: sortOrderReducer
});
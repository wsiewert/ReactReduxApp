import { SET_CATEGORY_FILTER, SET_CATEGORIES } from "../actions/types";

const initialState = {
    categories: [],
    category: "All"
}

const categories = (state = initialState, action) => {
    switch(action.type){
        case SET_CATEGORY_FILTER:
            return {...state, category: action.payload};
        case SET_CATEGORIES:
            return {...state, categories: action.payload};
        default:
            return state;
    }
}

export default categories;
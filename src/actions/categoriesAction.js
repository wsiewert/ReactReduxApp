import { SET_CATEGORY_FILTER, SET_CATEGORIES } from "./types";

export const setCategoryFilter = (payload) => dispatch => {
    dispatch({
        type: SET_CATEGORY_FILTER,
        payload: payload
    });
}

export const setCategories = (payload) => dispatch => {
    dispatch({
        type: SET_CATEGORIES,
        payload: payload
    });
}
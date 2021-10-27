import { SET_SORT_ORDER } from "./types";

export const setSortOrder = (payload) => dispatch => {
    dispatch({
        type: SET_SORT_ORDER,
        payload: payload
    });
}

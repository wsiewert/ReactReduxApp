import { SET_SORT_ORDER } from "../actions/types";

const initialState = {
    sort: "Price: Highest to Lowest"
}

const sort = (state = initialState, action) => {
    switch(action.type){
        case SET_SORT_ORDER:
            return {...state, sort: action.payload};
        default:
            return state;
    }
}

export default sort;
import * as actionTypes from './actions/actionTypes';
import { updateObject } from './actions/utillity';

const initialState = {
    language: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LANGUAGE:
            return updateObject(state, {language: action.language})

        default:
            return state;
    }
}

export default reducer;
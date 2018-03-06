import { ActionTypes } from "../actions/types";


export function surveys(state = [], action) {
    switch (action.type) {
        case ActionTypes.FETCH_SURVEYS:
            return {
                ...state,
                surveys: action.payload.surveys
            };
        default:
            return state;
    }
}

/* eslint-disable import/no-anonymous-default-export */
import { UPDATE_FORM_UI } from './actionTypes';
const initialState = {
    config: [],
    error: null
};
export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_FORM_UI:
            return Object.assign(Object.assign({}, state), { config: action.payload });
        default:
            return Object.assign({}, state);
    }
}

/* eslint-disable import/no-anonymous-default-export */
import { UPDATE_FORM_UI } from './actionTypes';
const initialState = {
    form: { config: [] },
    error: null
};
export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_FORM_UI:
            return Object.assign(Object.assign({}, state), { form: Object.assign(Object.assign({}, state.form), { config: action.payload }) });
        default:
            return state;
    }
}

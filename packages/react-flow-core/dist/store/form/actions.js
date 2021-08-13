import { UPDATE_FORM_UI, SUBMIT_FORM_UI } from './actionTypes';
// TODO: form config
export const updateFormUI = (payload) => ({
    type: UPDATE_FORM_UI,
    payload
});
export const submitForm = (payload) => ({
    type: SUBMIT_FORM_UI,
    payload
});

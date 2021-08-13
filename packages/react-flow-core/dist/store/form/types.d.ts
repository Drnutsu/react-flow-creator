import { UPDATE_FORM_UI, SUBMIT_FORM_UI } from './actionTypes';
export interface FormState {
    config: Array<any>;
    error: string | null;
}
export interface UpdateFormPayload {
    type: typeof UPDATE_FORM_UI;
    payload: any;
}
export interface UpdateFormRequest {
    type: typeof UPDATE_FORM_UI;
    payload: any;
}
export interface SubmitFormRequest {
    type: typeof SUBMIT_FORM_UI;
    payload: any;
}
export declare type FormUIActions = UpdateFormPayload;

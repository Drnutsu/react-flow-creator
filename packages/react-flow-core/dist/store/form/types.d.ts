import { UPDATE_FORM_UI } from './actionTypes';
export interface FormConfig {
    config: any;
}
export interface FormState {
    form: FormConfig;
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
export declare type FormUIActions = UpdateFormPayload;

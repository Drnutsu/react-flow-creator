import { UPDATE_FORM_UI } from './actionTypes'

export interface FormState {
  // TODO: change to form schema
  config: Array<any>
  error: string | null
}

export interface UpdateFormPayload {
  type: typeof UPDATE_FORM_UI
  payload: any
}

export interface UpdateFormRequest {
  type: typeof UPDATE_FORM_UI
  // add array of form creation here.
  payload: any
}

export type FormUIActions = UpdateFormPayload

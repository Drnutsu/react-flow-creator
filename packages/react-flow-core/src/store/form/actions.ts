import { UPDATE_FORM_UI, SUBMIT_FORM_UI } from './actionTypes'
import { UpdateFormRequest, SubmitFormRequest } from './types'

// TODO: form config
export const updateFormUI = (payload: any): UpdateFormRequest => ({
  type: UPDATE_FORM_UI,
  payload
})

export const submitForm = (payload: any): SubmitFormRequest => ({
  type: SUBMIT_FORM_UI,
  payload
})

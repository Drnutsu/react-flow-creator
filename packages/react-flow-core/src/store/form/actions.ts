import { UPDATE_FORM_UI } from './actionTypes'
import { UpdateFormRequest } from './types'

// TODO: form config
export const updateFormUI = (payload: any): UpdateFormRequest => ({
  type: UPDATE_FORM_UI,
  payload
})

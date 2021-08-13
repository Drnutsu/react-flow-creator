/* eslint-disable import/no-anonymous-default-export */
import { UPDATE_FORM_UI } from './actionTypes'

import { FormState, FormUIActions } from './types'

const initialState: FormState = {
  config: [],
  error: null
}

export default function (state = initialState, action: FormUIActions) {
  switch (action.type) {
    case UPDATE_FORM_UI:
      return {
        ...state,
        config: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

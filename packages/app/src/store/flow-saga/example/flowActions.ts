import { INITIAL_EXAMPLE_FLOW } from './actionTypes'

// TODO: add type for example message params.
export const startExampleFlow = (payload: any): InitialFormRequest => ({
  type: INITIAL_EXAMPLE_FLOW,
  payload
})

export interface InitialFormRequest {
  type: typeof INITIAL_EXAMPLE_FLOW
  payload: any
}

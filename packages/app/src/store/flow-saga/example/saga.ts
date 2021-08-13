import { all, put, takeLatest, take } from 'redux-saga/effects'
import { INITIAL_EXAMPLE_FLOW } from './actionTypes'
import { form } from 'react-flow-core'

function* startExampleFlowSaga(action: any) {
  // create form
  yield put(
    form.actions.updateFormUI([
      {
        type: 'input',
        name: 'simple_text_input',
        label: 'Simple Text Input',
        placeholder: 'just simple text input type here.'
      }
    ])
  )

  // waiting for submit from the form
  const { payload: firstPayload } = yield take(form.actionsTypes.SUBMIT_FORM_UI)
  console.log(' take first payload from submit : ', firstPayload)

  // create the second form
  yield put(
    form.actions.updateFormUI([
      {
        type: 'input',
        name: 'another_field',
        label: 'Put second another field',
        placeholder: 'any string as you want'
      }
    ])
  )

  // waiting for submit from the second form
  const { payload: secondPayload } = yield take(
    form.actionsTypes.SUBMIT_FORM_UI
  )
  console.log(' take second payload from submit : ', secondPayload)
}

function* exampleFlowSaga() {
  yield all([takeLatest(INITIAL_EXAMPLE_FLOW, startExampleFlowSaga)])
}

export default exampleFlowSaga

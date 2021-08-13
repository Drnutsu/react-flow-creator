import { all, takeLatest } from 'redux-saga/effects'

import { form } from 'react-flow-core'

function* executeExampleSaga() {}

function* exampleSaga() {
  // TODO: create action and add here.
  yield all([takeLatest('EXAMPLE', executeExampleSaga)])
}

export default exampleSaga

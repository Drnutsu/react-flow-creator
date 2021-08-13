import { all, fork } from 'redux-saga/effects'

import todoSaga from './todo/sagas'
import exampleFlowSaga from './flow-saga/example/saga'

export function* rootSaga() {
  yield all([fork(todoSaga), fork(exampleFlowSaga)])
}

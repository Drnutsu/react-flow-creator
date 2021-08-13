import { all, put, takeLatest } from 'redux-saga/effects';
import { UPDATE_FORM_UI } from './actionTypes';
import { updateFormUI } from './actions';
function* createFormSaga(action) {
    console.log(' create form saga : ', action);
    yield put(updateFormUI(action.payload));
}
function* formCreatorSaga() {
    yield all([takeLatest(UPDATE_FORM_UI, createFormSaga)]);
}
export default formCreatorSaga;

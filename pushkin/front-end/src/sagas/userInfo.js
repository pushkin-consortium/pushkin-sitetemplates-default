import { SET_USER_ID, GET_SESSION_USER } from '../actions/userInfo';
import { put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import session from '../utils/session';

export function* handleCookie() {
  console.log('Saga initialized...');
  const id = yield session.get();
  console.log(id);
  yield put({ type: SET_USER_ID, id: id });
}

export function* getSessionUser() {
  yield takeLatest(GET_SESSION_USER, handleCookie);
}

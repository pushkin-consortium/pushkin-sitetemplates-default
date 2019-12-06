import { GOT_SESSION_USER, GET_SESSION_USER } from '..actions/userInfo';
import { put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import session from '../utils/session';

export function* getSessionUser() {
  const id = yield session.get();
  yield put({ type: GOT_SESSION_USER, id: id });
}

export function* loadToDoList() {
  yield takeLatest(GET_SESSION_USER, getSessionUser);
}

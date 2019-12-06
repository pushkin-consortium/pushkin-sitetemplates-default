import { put, takeEvery, all } from 'redux-saga/effects';
import { getSessionUser } from './userInfo';

const delay = ms => new Promise(res => setTimeout(res, ms));

export default function* rootSaga() {
  yield all([getSessionUser()]);
}

import { put, takeEvery, all } from 'redux-saga/effects';
import { getUserDBInfo } from './userInfo';

const delay = ms => new Promise(res => setTimeout(res, ms));

export default function* rootSaga() {
  yield all([getUserDBInfo()]);
}

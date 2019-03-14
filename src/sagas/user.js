import { all, call, put, takeLatest } from 'redux-saga/effects';
import {LOGIN,
  LOGOUT,
  loginFailure,
  loginRequested,
  loginSuccess,
  logoutFailure,
  logoutSuccess,
  logoutRequested,
 } from '../actions/user-actions-types';
import httpClient from './http-client';

export function* login() {
  yield put(loginRequested());
  const {
    error, result,
  } = yield call(httpClient, {
    data: {
      email: '',
      password: '',
    },
    method: 'post',
    url: '/abc',
  });

  if (error) {
    yield put(loginFailure(error));
  } else {
    yield put(loginSuccess(result));
  }
}

export function* logout() {
  yield put(logoutRequested());

  const { error } = yield call(httpClient, {
    data: {
      email: '',
      password: '',
    },
    method: 'put',
    url: '/abc',
  });

  if (error) {
    yield put(logoutFailure(error));
  } else {
    yield put(logoutSuccess());
  }
}

function* User() {
  yield all([
    takeLatest(LOGIN, login),
    takeLatest(LOGOUT, logout),
  ]);
}

export default User;

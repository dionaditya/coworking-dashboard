// import { take, call, put, select } from 'redux-saga/effects';
import { all, call, put, takeEvery, fork, take } from 'redux-saga/effects';
import { reduxSagaFirebase } from '../../utils/ReduxSagaFirebase';
import firebase from 'firebase';
import {
  logoutFailure,
  loginSuccess,
  logoutSuccess,
  types,
} from '../App/actions';

function* logoutSaga() {
  try {
    yield call(reduxSagaFirebase.auth.signOut);

    // successful logout will trigger the loginStatusWatcher, which will update the stat
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

function* loginStatusWatcher() {
  // events on this channel fire when the user logs in or logs out
  const channel = yield call(reduxSagaFirebase.auth.channel);

  while (true) {
    const { user } = yield take(channel);

    if (user) yield put(loginSuccess(user));
    else yield put(logoutSuccess());
  }
}

// Individual exports for testing
export default function* dashboardSaga() {
  yield fork(loginStatusWatcher);
  // See example in containers/HomePage/saga.js yield fork(loginStatusWatcher);
  yield all([takeEvery(types.LOGOUT.REQUEST, logoutSaga)]);
}

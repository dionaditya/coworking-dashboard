import { all, call, put, takeEvery, fork, take } from 'redux-saga/effects';
import { reduxSagaFirebase } from '../../utils/ReduxSagaFirebase';
import firebase from 'firebase';
import {
  loginFailure,
  logoutFailure,
  loginSuccess,
  logoutSuccess,
  types,
  loading,
} from './actions';

const authProvider = new firebase.auth.GoogleAuthProvider();

function* loginWithEmailSaga(datas) {
  try {
    const data = yield call(
      reduxSagaFirebase.auth.signInWithEmailAndPassword,
      datas.email,
      datas.password,
    );
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* loginSaga() {
  try {
    yield call(reduxSagaFirebase.auth.signInWithPopup, authProvider);
    // successful login will trigger the loginStatusWatcher, which will update the state
  } catch (error) {
    yield put(loginFailure(error));
  }
}

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

    if (user) {
      yield put(loginSuccess(user));
    } else yield put(logoutSuccess());
  }
}

// Individual exports for testing
export default function* loginRootSaga() {
  yield fork(loginStatusWatcher);
  yield all([
    takeEvery(types.LOGIN.EMAIL, loginWithEmailSaga),
    takeEvery(types.LOGIN.REQUEST, loginSaga),
    takeEvery(types.LOGOUT.REQUEST, logoutSaga),
  ]);
}

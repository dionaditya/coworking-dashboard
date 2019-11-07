// import { take, call, put, select } from 'redux-saga/effects';
import { all, takeLatest, put } from 'redux-saga/effects';
import {
  createRequestInstance,
  watchRequests,
  success,
} from 'redux-saga-requests';
import { sendRequest } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';
import {
  types,
  requestMeetingRooms,
  responseMeetingRooms,
  errorMeetingRooms,
  getMeetingRooms,
  responseMeetingRoomsDetail,
  statusMeetingRooms,
  responseAddMeetingRooms,
  responseDeleteMeetingRooms,
} from './actions';
import axios from 'axios';

function* requestMeetingRoomsSaga(request, action) {
  console.log(request, action);
  yield put(requestMeetingRooms());
  return request;
}

function* responseMeetingRoomsSaga(response, action) {
  if (action.type === types.REQ.DETAIL) {
    yield put(responseMeetingRoomsDetail(response));
  } else {
    switch (action.type) {
      case types.REQ.EDIT:
        yield put(statusMeetingRooms(response, 'Update data berhasil'));
        break;

      case types.REQ.ADD:
        yield put(responseAddMeetingRooms());
        break;

      case types.REQ.DELETE:
        yield put(responseDeleteMeetingRooms(response));
        break;

      default:
        yield put(responseMeetingRooms(response));
        yield put(statusMeetingRooms(response));
        break;
    }
  }

  return response;
}

function* errorMeetingRoomsSaga(error, action) {
  console.log(error.response.status);
  if (
    error.response &&
    error.response.status === 404 &&
    action.type === types.REQ.GET
  ) {
    yield sendRequest(getMeetingRooms(), { silent: true });
  }
  yield put(errorMeetingRooms(error));
}

// Individual exports for testing
export default function* dashboardSaga() {
  yield createRequestInstance({
    onRequest: requestMeetingRoomsSaga,
    onSuccess: responseMeetingRoomsSaga,
    onError: errorMeetingRoomsSaga,
    driver: createDriver(
      axios.create({
        baseURL: 'https://my-json-server.typicode.com/dionaditya/coworkingAPI',
      }),
    ),
  });

  yield all([
    // put it before other sagas which handle requests, otherwise watchRequests might miss some requests...
    // or your sagas might miss requests actions, like success
    watchRequests(),
    takeLatest(types.REQ.GET, requestMeetingRoomsSaga),
    takeLatest(types.REQ.ADD, requestMeetingRoomsSaga),
    takeLatest(types.REQ.DELETE, requestMeetingRoomsSaga),
  ]);
}

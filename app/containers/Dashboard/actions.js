/*
 *
 * Dashboard actions
 *
 */

const types = {
  REQ: {
    ADD: 'ADD_MEETING_ROMS',
    EDIT: 'EDIT_MEETING_ROOMS',
    DELETE: 'DELETE_MEETING_ROOMS',
    GET: 'GET_MEETING_ROOMS',
    DETAIL: 'DETAIL_MEETING_ROOMS',
    SUCCESS: 'REQ_SUCCESS',
    FAILURE: 'REQ_FAILURE',
    DELETE_STATE: 'REQ_DELETE_STATE',
    ADD_STATE: 'REQ_ADD_STATE',
  },

  RES: {
    GET: 'GET_SUCCESS',
    ADD: 'POST_SUCCESS',
    EDIT: 'EDIT_SUCCESS',
    DELETE: 'DELETE_SUCCESS',
    DETAIL: 'DETAIL_SUCCESS',
    ERROR_FETCH: 'ERROR_FETCH',
    STATUS: 'STATUS_MESSAGE',
  },
};

const deleteMeetingRooms = id => {
  return {
    type: types.REQ.DELETE,
    request: {
      url: `/meeting-rooms/${id}`,
      method: 'delete',
    },
    meta: {
      // meta is optional, it will be added to success, error or abort action when defined
      id,
    },
  };
};

const deleteState = id => ({
  type: types.REQ.DELETE_STATE,
  id,
});

const editMeetingRoom = (id, data) => {
  console.log(data);
  return {
    type: types.REQ.EDIT,
    request: {
      url: `/meeting-rooms/${id}`,
      method: 'put',
      data: data,
    },
  };
};

const addMeetingRooms = data => ({
  type: types.REQ.ADD,
  request: {
    url: `/meeting-rooms`,
    method: 'post',
    data: data,
  },
});

const addMeetingRoomsState = data => {
  console.log('add', data);
  return {
    type: types.REQ.ADD_STATE,
    data,
  };
};

const getMeetingRooms = () => ({
  type: types.REQ.GET,
  request: {
    url: `/meeting-rooms`,
    method: 'get',
  },
});

const getMeetingRoom = id => ({
  type: types.REQ.DETAIL,
  request: {
    url: `/meeting-rooms/${id}`,
    method: 'get',
  },
});

const requestMeetingRooms = () => ({
  type: types.REQ.SUCCESS,
});

const responseMeetingRooms = response => {
  console.log('action', response.data);
  return {
    type: types.RES.GET,
    data: response.data,
  };
};

const responseMeetingRoomsDetail = response => {
  console.log('action', response.data);
  return {
    type: types.RES.DETAIL,
    data: response.data,
  };
};

const responseAddMeetingRooms = response => {
  return {
    type: types.RES.ADD,
  };
};

const responseDeleteMeetingRooms = response => {
  return {
    type: types.RES.DELETE,
  };
};

const errorMeetingRooms = error => ({
  type: types.RES.ERROR_FETCH,
  error,
});

const statusMeetingRooms = (response, message) => {
  console.log('message', message);
  return {
    type: types.RES.STATUS,
    status: response.status,
    message: message,
  };
};

export {
  types,
  addMeetingRooms,
  editMeetingRoom,
  deleteMeetingRooms,
  getMeetingRooms,
  getMeetingRoom,
  requestMeetingRooms,
  responseMeetingRooms,
  errorMeetingRooms,
  responseMeetingRoomsDetail,
  statusMeetingRooms,
  addMeetingRoomsState,
  responseAddMeetingRooms,
  responseDeleteMeetingRooms,
  deleteState,
};

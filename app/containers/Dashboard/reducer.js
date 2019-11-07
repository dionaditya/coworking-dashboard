/*
 *
 * Dashboard reducer
 *
 */
import produce from 'immer';
import { types } from './actions';

export const initialState = {
  loading: false,
  data: [],
  error: null,
  detail: null,
  status: null,
  message: null,
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.REQ.GET:
        draft.loading = true;
        break;
      case types.REQ.ADD_STATE:
        console.log(action);
        draft.data.push(action.data);
        break;

      case types.REQ.DETAIL:
        draft.loading = true;
        break;
      case types.REQ.DELETE:
        draft.loading = true;
        break;

      case types.REQ.DELETE_STATE:
        const updatedData = draft.data.filter(function(key) {
          return key.id !== action.id;
        });
        draft.data = updatedData;
        break;

      case types.RES.GET:
        console.log('reducer', action.data);
        draft.data = action.data;
        draft.loading = false;
        break;

      case types.RES.DETAIL:
        console.log('reducer detail', action.data);
        draft.detail = action.data;
        draft.loading = false;
        break;

      case types.RES.STATUS:
        console.log('status', action.message);
        draft.status = action.status;
        draft.message = action.message;
        draft.loading = false;
        break;
      case types.RES.ERROR_FETCH:
        console.log('reducer', action.error);
        draft.loading = false;
        draft.error = action.error;
        break;

      default:
        return state;
    }
  });

export default dashboardReducer;

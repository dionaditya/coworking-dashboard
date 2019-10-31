/*
 *
 * Dashboard reducer
 *
 */
import produce from 'immer';
import { types } from '../App/actions';

export const initialState = {
  loading: false,
  loggedIn: false,
  user: null,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.LOGOUT.REQUEST:
        initialState;
        break;
      case types.LOGOUT.FAILURE:
        draft.loading = false;
        draft.loggedIn = false;
        break;
      case types.LOGOUT.SUCCESS:
        return initialState;
      default:
        return state;
    }
  });

export default dashboardReducer;

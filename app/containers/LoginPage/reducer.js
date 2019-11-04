/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { types } from './actions';

export const initialState = {
  loading: false,
  loggedIn: false,
  user: null,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.LOGIN.REQUEST:
        draft.loading = true;
        draft.loggedIn = false;
        draft.user = action.user;
        break;
      case types.LOGIN.EMAIL:
        draft.loading = true;
        draft.loggedIn = false;
        draft.user = action.user;
        break;
      case types.LOGOUT.REQUEST:
        draft.loading = true;
        draft.loggedIn = false;
        break;
      case types.LOGIN.SUCCESS:
        draft.user = action.user;
        draft.loading = false;
        draft.loggedIn = true;
        break;
      case types.LOGIN.FAILURE:
        draft.loading = false;
        draft.loggedIn = false;
        draft.error = action.error;
        console.log('LOGIN FAILED', action.error);
        break;
      case types.LOGOUT.SUCCESS:
        return initialState;
      case types.LOGOUT.FAILURE:
        draft.loading = false;
        draft.loggedIn = false;
        break;
      default:
        return state;
    }
  });

export default loginPageReducer;

/*
 *
 * LoginPage actions
 *
 */

export const types = {
  LOGIN: {
    REQUEST: 'LOGIN.REQUEST',
    SUCCESS: 'LOGIN.SUCCESS',
    FAILURE: 'LOGIN.FAILURE',
    EMAIL: 'LOGIN.EMAIL',
  },
  LOGOUT: {
    REQUEST: 'LOGOUT.REQUEST',
    SUCCESS: 'LOGOUT.SUCCESS',
    FAILURE: 'LOGOUT.FAILURE',
  },
};

export const login = () => ({
  type: types.LOGIN.REQUEST,
});

export function loginEmail(email, password) {
  return {
    type: types.LOGIN.EMAIL,
    email,
    password,
  };
}

export const loginSuccess = user => ({
  type: types.LOGIN.SUCCESS,
  user,
});

export const loginFailure = error => ({
  type: types.LOGIN.FAILURE,
  error,
});

export function logout() {
  return {
    type: types.LOGOUT.REQUEST,
  };
}

export const logoutSuccess = () => ({
  type: types.LOGOUT.SUCCESS,
});

export const logoutFailure = error => ({
  type: types.LOGOUT.FAILURE,
  error,
});

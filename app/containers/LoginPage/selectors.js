import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.loginPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectUser = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.user,
  );

const makeSelectLoading = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.loading,
  );

const makeSelectLoggedIn = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.loggedIn,
  );

const makeSelectError = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.error,
  );

export {
  selectLoginPageDomain,
  makeSelectUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectLoggedIn,
};

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dashboard state domain
 */

const selectDashboardDomain = state => state.dashboard || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Dashboard
 */

const makeSelectLoading = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.loading,
  );

const makeSelectData = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.data,
  );

const makeSelectDetail = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.detail,
  );

const makeSelectStatus = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.status,
  );

const makeSelectMessage = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.message,
  );

const makeSelectError = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.error,
  );

const makeSelectDashboard = () => {
  createSelector(
    selectDashboardDomain,
    substate => substate,
  );
};

export default makeSelectDashboard;
export {
  selectDashboardDomain,
  makeSelectData,
  makeSelectLoading,
  makeSelectDetail,
  makeSelectStatus,
  makeSelectMessage,
  makeSelectError,
};

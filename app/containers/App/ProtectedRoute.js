import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  makeSelectError,
  makeSelectLoggedIn,
  makeSelectUser,
  makeSelectLoading,
} from '../LoginPage/selectors';
import { logout } from '../LoginPage/actions';

const ProtectedRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn === true ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  loggedIn: makeSelectLoggedIn(),
  user: makeSelectUser(),
  error: makeSelectError(),
});

/* use State from Login state*/
function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(logout()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProtectedRoute);

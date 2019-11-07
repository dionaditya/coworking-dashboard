import React, { useEffect, useState } from 'react';
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
import LoginPage from '../LoginPage/Loadable';

const ProtectedRoute = ({
  component: Component,
  loggedIn,
  loading,
  location,
  ...rest
}) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

    console.log(location.pathname);
  }, [loggedIn, loading]);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <LoginPage redirect={location.pathname} />
        )
      }
    />
  );
};

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

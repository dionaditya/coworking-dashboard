/**
 *
 * LoginPage
 *
 */

// @flow

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import Container from '../../components/Container';
import Checkboxes from 'components/Checkboxes';
import TextInput from '../../components/TextInput';
import TextFieldPassword from '../../components/TextFieldPassword';
import ButtonMedium from '../../components/ButtonMedium';
import { login, loginEmail } from './actions';
import { Redirect } from 'react-router-dom';
import PasswordField from 'material-ui-password-field';
import LoadingIndicator from 'components/LoadingIndicator';
import { Wrapper } from './Wrapper';
import {
  makeSelectUser,
  makeSelectError,
  makeSelectLoading,
  makeSelectLoggedIn,
} from './selectors';

export function LoginPage({
  signIn,
  loggedIn,
  signInWithEmail,
  error,
  user,
  loading,
}) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });
  const [loadingMoment, setLoading] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [formValue, setValue] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setLoadings] = useState(false);
  const [errorCode, setError] = useState({
    wrongPassword: false,
    userNotRegistered: false,
  });

  useEffect(() => {
    if (loggedIn != undefined) {
      setLoading(false);
      if (error !== null) {
        console.log('error', error.code);
        if (error.code === 'auth/wrong-password') {
          setLoadings(false);
          setError({
            ...errorCode,
            wrongPassword: true,
          });
        }
        if (error.code === 'auth/user-not-found') {
          setLoadings(false);
          setError({
            ...errorCode,
            userNotRegistered: true,
          });
        }
      }
      if (user) {
        setLoggedIn(true);
      }
    }
  }, [loggedIn]);

  const handleChange = e => {
    const name = e.target.name;
    setValue({
      ...formValue,
      [name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setLoadings(true);
    const finishedValue = {
      email: formValue.email,
      password: formValue.password,
    };
    signInWithEmail(finishedValue.email, finishedValue.password);
    setLoadings(false);
  };

  if (loadingMoment) {
    return <LoadingIndicator>Loading</LoadingIndicator>;
  }

  if (isLoggedIn) {
    return <Redirect to="/dashboard">login</Redirect>;
  }

  return (
    <Wrapper>
      <Container>
        <div
          name="image-login"
          style={{
            background:
              'url(https://images.unsplash.com/photo-1562184760-a11b3cf7c169?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
        <div
          name="content-login-wrapper"
          style={{
            background: 'white',
            display: 'grid',
            gridTemplateColumns: '1fr',
            padding: '30px 50px 0px 50px',
          }}
        >
          <div
            name="logo"
            style={{
              fontWeight: 'bold',
              fontSize: '36px',
              textAlign: 'center',
            }}
          >
            LOGO
          </div>
          <p
            name="logo-caption"
            style={{
              fontSize: '12px',
              textAlign: 'center',
              color: '#404040',
              marginTop: '-50px',
            }}
          >
            Welcome to Admin Coworking Dashboard
          </p>
          <form name="login-form" style={{ marginTop: '-50px' }}>
            <TextInput onChangeForm={handleChange} value={formValue} />
            {errorCode.userNotRegistered ? (
              <p
                style={{
                  color: '#ED2B2E',
                  fontSize: '10px',
                }}
              >
                Email has been not registered
              </p>
            ) : (
              <div />
            )}
            <PasswordField
              value={formValue.password}
              name="password"
              placeholder="Password"
              style={{
                marginTop: '10px',
              }}
              onChange={e => handleChange(e)}
            />
            {errorCode.wrongPassword ? (
              <p
                style={{
                  color: '#ED2B2E',
                  fontSize: '10px',
                }}
              >
                Invalid password, or Login with Google
              </p>
            ) : (
              <div />
            )}
          </form>
          <div
            name="two-column-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '0.9fr 0.9fr',
              alignItems: 'center',
              gridGap: '20px',
              marginTop: '-100px',
            }}
          >
            <div
              name="flex-container"
              style={{
                display: 'flex',
                placeItems: 'center center',
                background: 'pink',
                fontSize: '12px',
              }}
            >
              <Checkboxes />
              <div>Remember me</div>
            </div>
            <div
              name="forgot-password"
              style={{
                fontSize: '12px',
                color: '#FF5B5B',
                fontWeight: 'bold',
                textAlign: 'right',
              }}
            >
              Forgot password?
            </div>
          </div>
          <div name="button-login-container" style={{ marginTop: '-30px' }}>
            <ButtonMedium onClickButton={handleSubmit} isLoading={isLoading}>
              sign in with email
            </ButtonMedium>
            <div
              style={{
                display: 'flex',
                color: 'black',
                alignItems: 'center',
                alignSelf: 'center',
                margin: '10px 0px 10px 0px',
              }}
            >
              <hr
                style={{
                  width: '100%',
                  background: 'black',
                }}
              />
              <div
                style={{
                  flexGrow: 1,
                  flexWrap: 'nowrap',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                or
              </div>
              <hr
                style={{
                  width: '100%',
                  background: 'black',
                }}
              />
            </div>
            <ButtonMedium onClickButton={signIn}>
              sign in with google
            </ButtonMedium>
          </div>
          <div
            name="flex-container"
            style={{
              fontSize: '14px',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
              margin: '-30px auto 0px auto',
            }}
          >
            <div
              style={{
                borderRight: '4px solid transparent',
                textAlign: 'center',
              }}
            >
              Don't have account?
            </div>
            <div
              style={{
                color: '#FF5B5B',
              }}
            >
              Register
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

/*
const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
}); */

const mapStateToProps = createStructuredSelector({
  loggedIn: makeSelectLoggedIn(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    signIn: () => dispatch(login()),
    signInWithEmail: function hello(email, password) {
      dispatch(loginEmail(email, password));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginPage);

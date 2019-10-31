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

export function LoginPage({ signIn, loggedIn, signInWithEmail }) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });
  const [loadingMoment, setLoading] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [formValue, setValue] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    if (loggedIn != undefined) {
      setLoading(false);
      if (loggedIn.error) {
        setError(true);
      }
      if (loggedIn.user) {
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
    const finishedValue = {
      email: formValue.email,
      password: formValue.password,
    };
    signInWithEmail(finishedValue.email, finishedValue.password);
  };

  if (loadingMoment) {
    return <div>Loading</div>;
  }

  if (isLoggedIn) {
    return <Redirect to="/dashboard">login</Redirect>;
  }

  return (
    <div
      style={{
        display: 'grid',
        height: '100vh',
        background: 'white',
        margin: 'auto',
        width: '100%',
        justifyItems: 'center',
        padding: '30px 0px 30px 0px',
      }}
    >
      <Container>
        <div
          style={{
            background:
              'url(https://images.unsplash.com/photo-1562184760-a11b3cf7c169?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
        <div
          style={{
            background: 'white',
            display: 'grid',
            gridTemplateColumns: '1fr',
            padding: '30px 50px 0px 50px',
          }}
        >
          <div
            style={{
              fontWeight: 'bold',
              fontSize: '36px',
              textAlign: 'center',
            }}
          >
            LOGO
          </div>
          <p
            style={{
              fontSize: '12px',
              textAlign: 'center',
              color: '#404040',
              marginTop: '-20px',
            }}
          >
            Welcome to Admin Coworking Dashboard
          </p>
          <form style={{ marginTop: '-50px' }}>
            <TextInput onChangeForm={handleChange} value={formValue} />
            {error ? (
              <p
                style={{
                  color: '#ED2B2E',
                  fontSize: '10px',
                }}
              >
                Email has been wrong
              </p>
            ) : (
              <div />
            )}
            <TextFieldPassword onChangeForm={handleChange} value={formValue} />
            {error ? (
              <p
                style={{
                  color: '#ED2B2E',
                  fontSize: '10px',
                }}
              >
                Invalid password
              </p>
            ) : (
              <div />
            )}
          </form>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '0.9fr 0.9fr',
              alignItems: 'center',
              gridGap: '20px',
              marginTop: '-100px',
            }}
          >
            <div
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
          <div style={{ marginTop: '-30px' }}>
            <ButtonMedium onClickButton={handleSubmit}>
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
    </div>
  );
}

/*
const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
}); */

const mapStateToProps = state => ({
  loggedIn: state.loginPage,
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

/**
 *
 * LoginPage
 *
 */

// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Container from '../../components/Container';
import Checkboxes from 'components/Checkboxes';
import TextInput from '../../components/TextInput';
import TextFieldPassword from '../../components/TextFieldPassword';
import ButtonMedium from '../../components/ButtonMedium';

export function LoginPage() {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  return (
    <div
      style={{
        display: 'grid',
        height: '100vh',
        background: 'white',
        margin: 'auto',
        width: '100%',
        paddingTop: '30px',
        paddingBottom: '40px',
        justifyItems: 'center',
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
            padding: '30px 50px 100px 50px',
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
            }}
          >
            Welcome to Admin Coworking Dashboard
          </p>
          <form>
            <TextInput />
            <p
              style={{
                color: '#ED2B2E',
                fontSize: '10px',
                marginTop: '5px',
              }}
            >
              Email has been wrong
            </p>
            <TextFieldPassword />
            <p
              style={{
                color: '#ED2B2E',
                fontSize: '10px',
              }}
            >
              Invalid password
            </p>
          </form>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '0.9fr 0.9fr',
              alignItems: 'center',
              gridGap: '20px',
              marginBottom: '20px',
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
          <ButtonMedium />
          <div
            style={{
              fontSize: '14px',
              fontWeight: 'bold',
              display: 'flex',
              placeItems: 'center center',
              margin: 'auto',
              marginTop: '30px',
            }}
          >
            <div
              style={{
                borderRight: '4px solid transparent',
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

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginPage);

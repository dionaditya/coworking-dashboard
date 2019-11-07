/**
 *
 * Dashboard
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import 'tabler-react/dist/Tabler.css';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectError,
  makeSelectLoggedIn,
  makeSelectUser,
  makeSelectLoading,
} from '../LoginPage/selectors';
import reducer from './reducer';
import saga from './saga';
import SideBar from 'components/SideBar';
import NavBar from 'components/NavBar';
import SubHeader from 'components/SubHeader';
import { logout } from '../LoginPage/actions';

import MainContent from './MainContent';

export function Dashboard(props) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  console.log('dashboard path', props.match.params);
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '55px 60px 1fr',
        }}
      >
        <NavBar logout={props.signOut} />
        <SubHeader params={props.match.params} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '240px 1fr',
            gridGap: '30px',
            height: '100%',
          }}
        >
          <div>
            <SideBar path={props.match.params} />
          </div>
          <div
            style={{
              height: '100%',
            }}
          >
            <MainContent
              path={props.match.path}
              params={props.match.params}
              search={props.location.search}
              url={props.match.url}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* use State from Login state*/
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

export default compose(withConnect)(Dashboard);

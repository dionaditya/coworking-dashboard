/**
 *
 * Dashboard
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
import TopStats from 'components/TopStats';
import Chart from 'components/Content';
import SubHeader from 'components/SubHeader';
import EventSpaceSettingTable from 'components/EventSpaceSettingTable';
import MembershipSettingTable from 'components/MembershipSettingTable';
import PrivateOfficeSettingTable from 'components/PrivateOfficeSettingTable';
import MeetingroomsSettingTable from 'components/MeetingroomsSettingTable';
import SettingNavigationTab from 'components/SettingNavigationTab';
import { logout } from '../LoginPage/actions';
import Divider from '@material-ui/core/Divider';
import { styled } from '@material-ui/core/styles';

const StyledDivider = styled(Divider)({
  marginBottom: '20px',
});

const TableSettings = props => {
  switch (props.params) {
    case 'event-space':
      return <EventSpaceSettingTable search={props.search} />;
      break;
    case 'private-office':
      return <PrivateOfficeSettingTable search={props.search} />;
      break;
    case 'membership':
      return <MembershipSettingTable search={props.search} />;
      break;

    default:
      return <MeetingroomsSettingTable search={props.search} />;
  }
};

const MainContent = props => {
  if (!props.params) {
    switch (props.path) {
      case '/point-of-sales':
        return <div>{props.path}</div>;

      case '/event':
        return <div>{props.path}</div>;

      case '/event-space':
        return <div>{props.path}</div>;

      case '/meeting-rooms':
        return <div>{props.path}</div>;

      case '/membership':
        return <div>{props.path}</div>;

      case '/door-lock':
        return <div>{props.path}</div>;

      case '/accounting':
        return <div>{props.path}</div>;

      case '/report':
        return <div>{props.path}</div>;

      case '/settings':
        return (
          <div
            name="container"
            style={{
              width: '100%',
              paddingRight: '30px',
              paddingBottom: '30px',
              marginTop: '80px',
            }}
          >
            <SettingNavigationTab params={props.params} />
            <StyledDivider />
            <TableSettings params={props.params} search={props.search} />
          </div>
        );

      case '/private-office':
        return <div>{props.path}</div>;

      default:
        return (
          <div
            name="two-column-grid-container"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 0.5fr',
              gridGap: '30px',
              paddingTop: '50px',
            }}
          >
            <div>
              <Chart path={props.path} />
            </div>
            <div>
              <TopStats />
            </div>
          </div>
        );
    }
  }
  return (
    <div
      style={{
        width: '100%',
        paddingRight: '30px',
        paddingBottom: '30px',
        marginTop: '80px',
      }}
    >
      <SettingNavigationTab params={props.params} />
      <StyledDivider />
      <TableSettings params={props.params} search={props.search} />
    </div>
  );
};

export function Dashboard(props) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '55px 60px 1fr',
        }}
      >
        <NavBar logout={props.signOut} />
        <SubHeader path={props.match.path} params={props.match.params} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '240px 1fr',
            gridGap: '30px',
            height: '100%',
          }}
        >
          <div>
            <SideBar path={props.match.path.slice(1)} />
          </div>
          <div
            style={{
              height: '100%',
            }}
          >
            <MainContent
              path={props.match.path}
              params={props.match.params.subpages}
              search={props.location.search}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

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

/**
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import 'tabler-react/dist/Tabler.css';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import SideBar from 'components/SideBar';
import NavBar from 'components/NavBar';
import TopStats from 'components/TopStats';
import Chart from 'components/Content';
import SubHeader from 'components/SubHeader';

const MainContent = props => {
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
      return <div>{props.path}</div>;

    case '/private-office':
      return <div>{props.path}</div>;

    default:
      return (
        <>
          <div>
            <Chart path={props.path} />
          </div>
          <div>
            <TopStats />
          </div>
        </>
      );
  }
};

export function Dashboard(props) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  console.log(props.location.pathname);
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '55px 60px 1fr',
          gridGap: '5px',
        }}
      >
        <NavBar />
        <SubHeader path={props.location.pathname} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '240px 1fr',
            gridGap: '30px',
            height: '100%',
          }}
        >
          <div>
            <SideBar />
          </div>
          <div
            style={{
              height: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr 0.5fr',
              gridGap: '30px',
            }}
          >
            <MainContent path={props.location.pathname} />
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
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

export default compose(withConnect)(Dashboard);

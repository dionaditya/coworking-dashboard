import React from 'react';
import Divider from '@material-ui/core/Divider';
import { styled } from '@material-ui/core/styles';
import TopStats from 'components/TopStats';
import Chart from 'components/Content';
import SettingNavigationTab from 'components/SettingNavigationTab';
import TableSettings from './TableSettings';

const StyledDivider = styled(Divider)({
  marginBottom: '20px',
});

const MainContent = props => {
  console.log(props.params.path);
  switch (props.params.path) {
    case 'point-of-sales':
      return <div>{props.params.path}</div>;

    case 'event':
      return <div>{props.params.path}</div>;

    case 'event-space':
      return <div>{props.params.path}</div>;

    case 'meeting-rooms':
      return <div>{props.params.path}</div>;

    case 'membership':
      return <div>{props.params.path}</div>;

    case 'door-lock':
      return <div>{props.params.path}</div>;

    case 'accounting':
      return <div>{props.params.path}</div>;

    case 'report':
      return <div>{props.params.path}</div>;

    case 'settings':
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
          <TableSettings params={props.params} url={props.url} />
        </div>
      );

    case 'private-office':
      return <div>{props.params.path}</div>;

    case 'dashboard':
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
            <Chart path={props.params.path} />
          </div>
          <div>
            <TopStats />
          </div>
        </div>
      );

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
};

export default MainContent;

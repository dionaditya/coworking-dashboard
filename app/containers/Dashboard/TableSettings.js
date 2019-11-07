import React, { useEffect } from 'react';
import EventSpaceSettingTable from 'components/EventSpaceSettingTable';
import MembershipSettingTable from 'components/MembershipSettingTable';
import PrivateOfficeSettingTable from 'components/PrivateOfficeSettingTable';
import MeetingroomsSettingTable from 'components/MeetingroomsSettingTable';
import {
  getMeetingRooms,
  deleteMeetingRooms,
  addMeetingRoomsState,
  addMeetingRooms,
} from './actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { makeSelectData, makeSelectLoading } from './selectors';
import { createStructuredSelector } from 'reselect';
import { deleteState } from './actions';
import DetailPage from './DetailPage';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

const MainTable = props => {
  useEffect(() => {
    props.getMeetingRooms();
  }, [props.params.subpages, props.params.id]);

  return (
    <div>
      <MeetingroomsSettingTable
        data={props.data}
        deleteState={props.deleteState}
        deleteMeetingRooms={props.deleteMeetingRooms}
        addMeetingRooms={props.addMeetingRooms}
        getMeetingRooms={props.getMeetingRooms}
        addMeetingRoomsState={props.addMeetingRoomsState}
      />
    </div>
  );
};

const TableSettings = props => {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  if (props.loading.loading) {
    return <div>Loading...</div>;
  }

  switch (props.params.subpages) {
    case 'event-space':
      return <EventSpaceSettingTable />;
      break;
    case 'private-office':
      return <PrivateOfficeSettingTable />;
      break;
    case 'membership':
      return <MembershipSettingTable />;
      break;

    default:
      switch (props.params.request) {
        case 'edit':
          return <DetailPage params={props.params} />;
          break;

        default:
          return (
            <MainTable
              params={props.params}
              data={props.data}
              getMeetingRooms={props.getMeetingRooms}
              deleteState={props.deleteState}
              deleteMeetingRooms={props.deleteMeetingRooms}
              addMeetingRoomsState={props.addState}
              addMeetingRooms={props.addMeetingRooms}
            />
          );
      }
  }
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  loading: makeSelectLoading(),
});
/* use State from Login state*/
function mapDispatchToProps(dispatch) {
  return {
    getMeetingRooms: () => dispatch(getMeetingRooms()),
    deleteMeetingRooms: id => dispatch(deleteMeetingRooms(id)),
    deleteState: id => dispatch(deleteState(id)),
    addState: data => dispatch(addMeetingRoomsState(data)),
    addMeetingRooms: data => dispatch(addMeetingRooms(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(TableSettings);

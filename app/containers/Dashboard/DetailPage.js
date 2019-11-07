import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { editMeetingRoom, getMeetingRoom } from './actions';
import {
  makeSelectDetail,
  makeSelectLoading,
  makeSelectError,
  makeSelectMessage,
  makeSelectStatus,
} from './selectors';
import EditDataMeetingRoomsTable from 'components/EditDataMeetingRoomsTable';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import NotificationSnackbar from '../../components/NotificationSnackBar';

const DetailPage = ({
  params,
  detail,
  loading,
  getMeetingRoom,
  editMeetingRoom,
  status,
  error,
  message,
}) => {
  const [open, setOpen] = React.useState(false);

  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  console.log(message);

  useEffect(() => {
    getMeetingRoom(params.id);
  }, []);

  if (detail === null || loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        style={{
          fontSize: '24px',
          color: 'rgb(67, 139, 244)',
        }}
      >
        ini halaman detail
      </div>
      <EditDataMeetingRoomsTable detail={detail} edit={editMeetingRoom} />
      {message ? <div>{message}</div> : <div />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  detail: makeSelectDetail(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  status: makeSelectStatus(),
  message: makeSelectMessage(),
});
/* use State from Login state*/
function mapDispatchToProps(dispatch) {
  return {
    getMeetingRoom: id => dispatch(getMeetingRoom(id)),
    editMeetingRoom: (id, data) => dispatch(editMeetingRoom(id, data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(DetailPage);

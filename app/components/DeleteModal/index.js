import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    height: '200px',
    padding: '30px',
    verticalAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    top: 100,
    left: 0,
    bottom: 100,
    right: 0,
  },
}));

export default function DeleteModal({
  deleteMeetingRooms,
  id,
  open,
  setOpen,
  deleteState,
}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  React.useEffect(() => {}, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    deleteState(id);
    deleteMeetingRooms(id);
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Apakah yakin menghapus data</h2>
          <p id="simple-modal-description">
            data yang telah dihapus tidak dapat dikembalikan
          </p>
          <button onClick={() => handleClick()}>Yes</button>
          <button onClick={() => handleClose()}>No</button>
        </div>
      </Modal>
    </div>
  );
}

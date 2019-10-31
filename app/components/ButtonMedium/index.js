/**
 *
 * ButtonMedium
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const useStyles = makeStyles(() => ({
  button: {
    background: '#FF5B5B',
    color: 'white',
    width: '100%',
  },
  input: {
    display: 'none',
  },
}));

function ButtonMedium(props) {
  const classes = useStyles();
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Button
        variant="contained"
        className={classes.button}
        onClick={props.onClickButton}
      >
        {props.children}
      </Button>
    </div>
  );
}

ButtonMedium.propTypes = {};

export default ButtonMedium;

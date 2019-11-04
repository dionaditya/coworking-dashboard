/**
 *
 * ButtonMedium
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LoadingIndicator from '../LoadingIndicator';

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

  if (props.isLoading) {
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
          disabled
        >
          {props.children}
          <LoadingIndicator
            style={{
              height: '20px',
            }}
          />
        </Button>
      </div>
    );
  }
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

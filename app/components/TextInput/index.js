/**
 *
 * InputText
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(() => ({
  margin: {
    margin: '10px 0px 0px 0px',
    width: '100%',
    fontWeight: 100,
    height: '50px',
  },
}));

function TextInput() {
  const classes = useStyles();
  return (
    <div>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        placeholder="Email"
        type="email"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

TextInput.propTypes = {};

export default TextInput;

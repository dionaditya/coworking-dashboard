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
    width: '100%',
  },
}));

function TextInput(props) {
  const classes = useStyles();
  return (
    <div>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        placeholder="Email"
        type="email"
        onChange={e => props.onChangeForm(e)}
        value={props.value.email}
        name="email"
      />
    </div>
  );
}

TextInput.propTypes = {};

export default TextInput;

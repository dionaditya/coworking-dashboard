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
import Lock from '@material-ui/icons/Lock';
import { Visibility } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  margin: {
    margin: '10px 0px 0px 0px',
    width: '100%',
    fontWeight: 100,
    fontSize: '12px',
  },
}));

function TextFieldPassword(props) {
  const classes = useStyles();
  return (
    <div>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        type="password"
        placeholder="Password"
        variant="outlined"
        onChange={e => props.onChangeForm(e)}
        value={props.value.password}
        name="password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">
              <Visibility />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

TextFieldPassword.propTypes = {};

export default TextFieldPassword;

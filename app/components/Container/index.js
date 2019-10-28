/**
 *
 * Container
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import StyledContainer from './StyledContainer';

function Container(props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}

Container.propTypes = {};

export default Container;

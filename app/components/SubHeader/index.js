/**
 *
 * SubHeader
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';

function SubHeader(props) {
  return (
    <div
      style={{
        background: 'white',
        height: '60px',
        marginTop: '50px',
        display: 'flex',
        paddingTop: '5px',
        width: '100%',
        boxShadow: '0px 1px 1px #ccc',
        position: 'fixed',
        zIndex: 12,
      }}
    >
      <div
        style={{
          display: 'flex',
          padding: '0 15px',
          flexGrow: 2,
          alignItems: 'center',
          alignSelf: 'center',
          marginLeft: '250px',
        }}
      >
        <Link
          to={`/${props.params.path}`}
          style={{
            border: '2px solid transparent',
            borderRight: '20px',
          }}
        >
          {props.params.subpages ? (
            <div style={{ display: 'flex' }}>
              <div>{props.params.path}</div>
            </div>
          ) : (
            <div>{props.params.path}</div>
          )}
        </Link>
        {props.params.subpages ? (
          <div
            style={{
              display: 'flex',
            }}
          >
            <div style={{ padding: '0 15px' }}>/</div>
            <div>{props.params.subpages}</div>
          </div>
        ) : (
          <div />
        )}
      </div>
      <div
        style={{
          fontSize: '14px',
          color: '#9B9B9B',
          justifyContent: 'flex-end',
          alignItems: 'center',
          alignSelf: 'center',
          marginRight: '20px',
        }}
      >
        Wednesday, 1 November 2019
      </div>
    </div>
  );
}

SubHeader.propTypes = {};

export default SubHeader;

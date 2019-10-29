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
        height: '100%',
        display: 'grid',
        placeItems: 'center center',
        gridTemplateColumns: '1fr 1fr 0.5fr',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          padding: '0 15px',
        }}
      >
        <Link
          to={`/${props.path.slice(1, -10)}`}
          style={{
            border: '2px solid transparent',
            borderRight: '20px',
          }}
        >
          {props.params.subpages ? (
            <div style={{ display: 'flex' }}>
              <div>{props.path.slice(1, -10)}</div>
            </div>
          ) : (
            <div>{props.path.slice(1)}</div>
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
          display: 'grid',
          placeItems: 'center center',
          gridTemplateColumns: '1fr 1fr',
          marginLeft: '-20em',
        }}
      >
        <div
          style={{
            marginRight: '10px',
          }}
        >
          Pilih filter
        </div>
        <button
          style={{
            padding: '8px',
            background: '#FF5B5B',
            border: '2px solid transparent',
            borderRadius: '5px',
            width: '200px',
            color: 'white',
            display: 'flex',
          }}
        >
          <div
            style={{
              flexGrow: 2,
            }}
          >
            Pilih filter
          </div>
          <div
            style={{
              display: 'flex',
              flexGrow: 1,
            }}
          >
            <div
              style={{
                flexGrow: 2,
              }}
            >
              |
            </div>
            <div
              id="arrow-icons"
              style={{
                flexGrow: 1,
              }}
            >
              <svg
                width="21"
                height="12"
                viewBox="0 0 21 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.95805 11.6817L1.05725 2.88158C0.627971 2.45716 0.627971 1.76907 1.05725 1.34469L2.09539 0.318305C2.52393 -0.105391 3.21848 -0.106207 3.64803 0.316494L10.7353 7.29075L17.8225 0.316494C18.2521 -0.106207 18.9467 -0.105391 19.3752 0.318305L20.4133 1.34469C20.8426 1.76912 20.8426 2.45721 20.4133 2.88158L11.5126 11.6817C11.0833 12.1061 10.3873 12.1061 9.95805 11.6817Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: '#9B9B9B',
        }}
      >
        Wednesday, 1 November 2019
      </div>
    </div>
  );
}

SubHeader.propTypes = {};

export default SubHeader;

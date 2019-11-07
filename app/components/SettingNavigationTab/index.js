/**
 *
 * SettingNavigationTab
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TabName = [
  {
    name: 'Meeting-rooms',
    path: 'meeting-rooms',
  },
  {
    name: 'Event Space',
    path: 'event-space',
  },
  {
    name: 'Private Office',
    path: 'private-office',
  },
  {
    name: 'Membership',
    path: 'membership',
  },
];
function SettingNavigationTab(props) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        width: '600px',
        gridGap: '20px',
        placeItems: 'center center',
        margin: '20px 0px 20px 0px',
      }}
    >
      {props.params.subpages
        ? TabName.map((TabName, i) => {
            if (props.params.subpages === `${TabName.path}`) {
              return (
                <Link
                  to={`/settings/${TabName.path}`}
                  style={{
                    width: '100%',
                    fontStyle: 'no-underline',
                    color: 'black',
                  }}
                  key={i}
                >
                  <div
                    style={{
                      background: 'white',
                      height: '53px',
                      display: 'grid',
                      gridTemplateRows: '1fr 5px',
                      width: '100%',
                      placeItems: 'center center',
                    }}
                  >
                    <div>{TabName.name}</div>
                    <div
                      style={{
                        background: '#FF5B5B',
                        height: '100%',
                        width: '100%',
                      }}
                    />
                  </div>
                </Link>
              );
            }

            return (
              <Link
                to={`/settings/${TabName.path}`}
                style={{
                  width: '100%',
                  fontStyle: 'no-underline',
                  color: 'black',
                }}
                key={i}
              >
                <div
                  style={{
                    background: 'white',
                    height: '53px',
                    display: 'grid',
                    gridTemplateRows: '1fr 5px',
                    width: '100%',
                    color: '#9B9B9B',
                    placeItems: 'center center',
                  }}
                >
                  <div>{TabName.name}</div>
                </div>
              </Link>
            );
          })
        : TabName.map((TabName, i) => {
            if (`${TabName.path}` === 'meeting-rooms') {
              return (
                <Link
                  to={`/settings/${TabName.path}`}
                  style={{
                    width: '100%',
                    fontStyle: 'no-underline',
                    color: 'black',
                  }}
                  key={i}
                >
                  <div
                    style={{
                      background: 'white',
                      height: '53px',
                      display: 'grid',
                      gridTemplateRows: '1fr 5px',
                      width: '100%',
                      placeItems: 'center center',
                    }}
                  >
                    <div>{TabName.name}</div>
                    <div
                      style={{
                        background: '#FF5B5B',
                        height: '100%',
                        width: '100%',
                      }}
                    />
                  </div>
                </Link>
              );
            }

            return (
              <Link
                to={`/settings/${TabName.path}`}
                style={{
                  width: '100%',
                  fontStyle: 'no-underline',
                  color: 'black',
                }}
                key={i}
              >
                <div
                  style={{
                    background: 'white',
                    height: '53px',
                    display: 'grid',
                    gridTemplateRows: '1fr 5px',
                    width: '100%',
                    color: '#9B9B9B',
                    placeItems: 'center center',
                  }}
                >
                  <div>{TabName.name}</div>
                </div>
              </Link>
            );
          })}
    </div>
  );
}

SettingNavigationTab.propTypes = {};

export default SettingNavigationTab;

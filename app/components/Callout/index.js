/**
 *
 * Callout
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import 'tabler-react/dist/Tabler.css';
import H3 from 'components/H3';
import { Card, Grid } from 'tabler-react';

function Callout() {
  return (
    <div
      style={{
        marginTop: '20px',
      }}
    >
      <Grid.Row cards deck>
        <Grid.Col md={6}>
          <div
            style={{
              height: '220px',
              background: 'white',
              border: '2px solid transparent',
              borderRadius: '10px',
              display: 'grid',
              gridTemplateColumns: '15px 1fr',
            }}
          >
            <div
              style={{
                background: '#8CA7C7',
                height: '220px',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
              }}
            />
            <div
              style={{
                display: 'grid',
                gridTemplateRows: '0.5fr 1fr 0.5fr',
                marginLeft: '80px',
              }}
            >
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: '100',
                  marginTop: '10px',
                  color: '#8CA7C7',
                }}
              >
                Booking Today
              </div>
              <div
                style={{
                  fontSize: '60px',
                  fontWeight: 'bold',
                }}
              >
                <p>48</p>
              </div>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginTop: '-60px',
                  color: '#9B9B9B',
                }}
              >
                Out of 50
              </div>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col md={6}>
          <div
            style={{
              height: '220px',
              background: 'white',
              border: '2px solid transparent',
              borderRadius: '10px',
              display: 'grid',
              gridTemplateColumns: '15px 1fr',
            }}
          >
            <div
              style={{
                background: '#FF5B5B',
                height: '220px',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
              }}
            />
            <div
              style={{
                display: 'grid',
                gridTemplateRows: '0.5fr 1fr 0.5fr',
                marginLeft: '80px',
              }}
            >
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: '100',
                  marginTop: '10px',
                  color: '#8CA7C7',
                }}
              >
                Checkout today
              </div>
              <div
                style={{
                  fontSize: '60px',
                  fontWeight: 'bold',
                }}
              >
                <p>50</p>
              </div>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginTop: '-60px',
                  color: '#9B9B9B',
                }}
              >
                Out of 60
              </div>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col>
          <div
            style={{
              height: '150px',
              background: 'white',
              border: '2px solid transparent',
              borderRadius: '10px',
              display: 'grid',
              gridTemplateColumns: '15px 1fr',
              marginTop: '20px',
            }}
          >
            <div
              style={{
                background: '#F2994A',
                height: '150px',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
              }}
            />
            <div
              style={{
                display: 'grid',
                gridTemplateRows: '0.5fr 1fr',
                marginLeft: '80px',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: '100',
                  marginTop: '10px',
                  color: '#8CA7C7',
                }}
              >
                Revenue
              </div>
              <div
                style={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                }}
              >
                <p>Rp. 1.500.000.000</p>
              </div>
            </div>
          </div>
        </Grid.Col>
      </Grid.Row>
    </div>
  );
}

Callout.propTypes = {};

export default Callout;

/**
 *
 * Chart
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import './line.css';

const BarChart = ({ data }) => (
  <C3Chart
    data={{
      json: data,
      type: 'bar',
      types: {
        data1: 'line',
        data2: 'bar',
        data3: 'bar',
      },
      colors: {
        data1: '#8CA7C7',
        data2: '#8CA7C7',
        data3: '#E4E4E4',
      },
      axes: {
        data1: 'y',
        data2: 'y2',
      },
    }}
    axis={{
      x: {
        tick: {
          outer: false,
        },
        categories: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        type: 'category',
      },
      y: {
        label: {
          text: 'Booking (Unit / Packs)',
          position: 'outer-middle',
          color: '#FF5B5B',

          // inner-top : default
          // inner-middle
          // inner-bottom
          // outer-top
          // outer-middle
          // outer-bottom
        },
        tick: {
          outer: false,
        },
      },
      y2: {
        show: true,
        label: {
          text: 'Y2 Label',
          position: 'outer-middle',
          // inner-top : default
          // inner-middle
          // inner-bottom
          // outer-top
          // outer-middle
          // outer-bottom
        },
        tick: {
          outer: false,
        },
      },
    }}
    legend={{
      show: false,
    }}
  />
);

const chartData = {
  bar: {
    data1: [30, 200, 100, 400, 150, 250],
    data2: [130, 100, 140, 200, 150, 50],
    data3: [130, 100, 140, 200, 150, 50],
  },
};

function Chart() {
  return (
    <div
      style={{
        background: 'white',
        padding: '20px',
        marginTop: '20px',
      }}
    >
      <div
        style={{
          fontWeight: '100',
          fontSize: '24px',
          color: '#8CA7C7',
        }}
      >
        Chart Coworking Performance
      </div>
      <BarChart data={chartData.bar} />
    </div>
  );
}

Chart.propTypes = {};

export default Chart;

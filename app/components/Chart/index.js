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

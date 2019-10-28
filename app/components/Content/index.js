/**
 *
 * Content
 *
 */

import React from 'react';
import Chart from 'components/Chart';
import Callout from 'components/Callout';

const Content = props => {
  return (
    <>
      <Chart />
      <Callout />
    </>
  );
};

Content.propTypes = {};

export default Content;

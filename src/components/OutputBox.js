import React from 'react';
import PropTypes from 'prop-types';

import { vtranslit } from './../libs/vtranslit';

import { Box } from './Box';

export const OutputBox = ({ value, fromScheme, toScheme }) => {
  const vt = vtranslit.init(fromScheme, toScheme);
  return <Box value={vt(value)} readOnly />;
};

OutputBox.propTypes = {
  value: PropTypes.string.isRequired,
  fromScheme: PropTypes.string.isRequired,
  toScheme: PropTypes.string.isRequired
};

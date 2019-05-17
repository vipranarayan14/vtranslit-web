import React from 'react';
import PropTypes from 'prop-types';

import { Box } from './Box';

export const OutputBox = ({ output }) => <Box value={output} readOnly />;

OutputBox.propTypes = {
  output: PropTypes.string.isRequired
};

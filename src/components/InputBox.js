import React from 'react';
import PropTypes from 'prop-types';

import { Box } from './Box';

export const InputBox = ({ handleInputChange }) => (
  <Box onChange={handleInputChange} />
);

InputBox.propTypes = {
  handleInputChange: PropTypes.func.isRequired
};

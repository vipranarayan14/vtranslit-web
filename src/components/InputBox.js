import React from 'react';
import PropTypes from 'prop-types';

export const InputBox = ({ handleInputChange }) => (
  <textarea onChange={handleInputChange} />
);

InputBox.propTypes = {
  handleInputChange: PropTypes.func.isRequired
};

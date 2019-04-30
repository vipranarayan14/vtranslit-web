import React from 'react';
import PropTypes from 'prop-types';

import { availableSchemes } from './../libs/vtranslit';

export const ToolBar = ({ type, handleSchemeSelect, defaultSelectValue }) => (
  <select onChange={handleSchemeSelect} defaultValue={defaultSelectValue}>
    {availableSchemes.map((scheme, index) => (
      <option value={scheme.code} key={index}>
        {scheme.name}
      </option>
    ))}
  </select>
);

ToolBar.propTypes = {
  handleSchemeSelect: PropTypes.func.isRequired
};

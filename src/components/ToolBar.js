import React from 'react';
import PropTypes from 'prop-types';

import styles from './ToolBar.module.css';

import { availableSchemes } from './../libs/vtranslit';

export const ToolBar = ({ handleSchemeChange, defaultScheme, children }) => (
  <div className={styles.ToolBar}>
    <select
      onChange={handleSchemeChange}
      defaultValue={defaultScheme}
      className={styles.Tool}
    >
      {availableSchemes.map((scheme, index) => (
        <option value={scheme.code} key={index}>
          {scheme.name}
        </option>
      ))}
    </select>
    {children}
  </div>
);

ToolBar.propTypes = {
  handleSchemeChange: PropTypes.func.isRequired,
  defaultScheme: PropTypes.string.isRequired
};

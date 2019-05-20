import React from 'react';
import PropTypes from 'prop-types';

import styles from './ToolBar.module.css';
import { ToolBar } from './ToolBar';

export const OutputToolBar = ({
  handleSchemeChange,
  toScheme,
  fromScheme,
  handleMultiSchemeToggle,
  availableToSchemes,
  ...props
}) => (
  <ToolBar {...props}>
    <select
      onChange={handleSchemeChange}
      value={toScheme}
      disabled={toScheme === 'Multi' ? true : false}
      className={styles.Tool}
    >
      {availableToSchemes.map((scheme, index) => (
        <option value={scheme.code} key={index}>
          {scheme.name}
        </option>
      ))}
    </select>
    <select
      onChange={handleMultiSchemeToggle}
      className={styles.Tool}
      defaultValue="off"
    >
      <option value="on">MultiScheme: On</option>
      <option value="off">MultiScheme: Off</option>
    </select>
  </ToolBar>
);

OutputToolBar.propTypes = {
  handleSchemeChange: PropTypes.func.isRequired,
  toScheme: PropTypes.string.isRequired,
  fromScheme: PropTypes.string.isRequired,
  handleMultiSchemeToggle: PropTypes.func.isRequired,
  availableToSchemes: PropTypes.array.isRequired
};

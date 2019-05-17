import React from 'react';
import PropTypes from 'prop-types';

import styles from './ToolBar.module.css';

import { availableSchemes } from './../libs/vtranslit';

export const ToolBar = ({
  handleSchemeChange,
  defaultScheme,
  handleCopyClick,
  children
}) => (
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
    <button
      onClick={handleCopyClick}
      className={`${styles.Tool} ${styles.pull_right}`}
    >
      Copy
    </button>
  </div>
);

ToolBar.propTypes = {
  handleSchemeChange: PropTypes.func.isRequired,
  defaultScheme: PropTypes.string.isRequired,
  handleCopyClick: PropTypes.func.isRequired
};

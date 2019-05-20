import React from 'react';
import PropTypes from 'prop-types';

import styles from './ToolBar.module.css';

export const ToolBar = ({ handleCopyClick, children }) => (
  <div className={styles.ToolBar}>
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
  handleCopyClick: PropTypes.func.isRequired
};

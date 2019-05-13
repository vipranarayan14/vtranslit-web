import React from 'react';

import styles from './Wrapper.module.css';

export const Wrapper = ({ children }) => (
  <div className={styles.Wrapper}>{children}</div>
);

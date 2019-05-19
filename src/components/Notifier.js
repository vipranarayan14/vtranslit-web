import React from 'react';
import PropTypes from 'prop-types';

import styles from './Notifier.module.css';

export const Notifier = ({ message }) => (
  <div className={`${styles.Notifier} ${message ? styles.show : ''}`}>
    {message}
  </div>
);

Notifier.propTypes = {
  message: PropTypes.string.isRequired
};

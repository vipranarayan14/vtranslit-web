import React from 'react';
import PropTypes from 'prop-types';

import styles from './ToolBar.module.css';
import { ToolBar } from './ToolBar';

const TRANSLIT_MODES = [
  {
    name: 'Translit Mode: All',
    desc: 'All the letters are transliterated'
  },
  {
    name: 'Translit Mode: Except',
    desc: "Letters within '#{' and '}#' markers are not transliterated"
  },
  {
    name: 'Translit Mode: Only',
    desc: "Only the letters within '#{' and '}#' markers are transliterated"
  }
];

export const InputToolBar = ({
  defaultTranslitMode,
  handleTranslitModeChange,
  ...props
}) => (
  <ToolBar {...props}>
    <select
      onChange={handleTranslitModeChange}
      defaultValue={defaultTranslitMode}
      className={styles.Tool}
    >
      {TRANSLIT_MODES.map((mode, index) => (
        <option value={index} title={mode.desc} key={index}>
          {mode.name}
        </option>
      ))}
    </select>
  </ToolBar>
);

InputToolBar.propTypes = {
  defaultTranslitMode: PropTypes.number.isRequired,
  handleTranslitModeChange: PropTypes.func.isRequired
};

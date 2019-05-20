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
  handleSchemeChange,
  fromScheme,
  toScheme,
  defaultTranslitMode,
  handleTranslitModeChange,
  availableFromSchemes,
  ...props
}) => (
  <ToolBar {...props}>
    <select
      onChange={handleSchemeChange}
      value={fromScheme}
      disabled={toScheme === 'Multi' ? true : false}
      className={styles.Tool}
    >
      {availableFromSchemes.map((scheme, index) => (
        <option value={scheme.code} key={index}>
          {scheme.name}
        </option>
      ))}
    </select>
    <select
      onChange={handleTranslitModeChange}
      defaultValue={defaultTranslitMode}
      disabled={toScheme === 'Multi' ? true : false}
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
  handleSchemeChange: PropTypes.func.isRequired,
  fromScheme: PropTypes.string.isRequired,
  toScheme: PropTypes.string.isRequired,
  defaultTranslitMode: PropTypes.string.isRequired,
  handleTranslitModeChange: PropTypes.func.isRequired,
  availableFromSchemes: PropTypes.array.isRequired
};

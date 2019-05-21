import React from 'react';
import PropTypes from 'prop-types';

import { vTranslitSchemes } from './../libs/vtranslit';

import styles from './TransliterationMap.module.css';

const getSchemeData = schemeCode => {
  const scheme = vTranslitSchemes.find(
    scheme => scheme.about.code === schemeCode
  );

  if (scheme && scheme.data) {
    return scheme.data;
  }

  return null;
};

const toString = char =>
  char ? (Array.isArray(char) ? char.join(' / ') : char) : '-';

const initMakeMapItem = (fromSchemeData, toSchemeData) => type =>
  fromSchemeData[type].map((fromSchemeVowel, index) => {
    const toSchemeVowel = toSchemeData[type][index];

    return (
      <div key={`${type}-${index}`} className={styles.MapItem}>
        <div>{toString(toSchemeVowel)}</div>
        <div>{toString(fromSchemeVowel)}</div>
      </div>
    );
  });

const makeMap = (fromScheme, toScheme) => {
  const fromSchemeData = getSchemeData(fromScheme);
  const toSchemeData = getSchemeData(toScheme);

  const makeMapItem = initMakeMapItem(fromSchemeData, toSchemeData);

  const vowelMarksMap = makeMapItem('vowelMarks').concat(
    makeMapItem('ayogavaha')
  );

  return {
    deadConsonantsMap: makeMapItem('deadConsonants'),
    symbolssMap: makeMapItem('symbols'),
    vowelMarksMap,
    vowelsMap: makeMapItem('vowels')
  };
};

const SubMap = ({ children }) => (
  <div className={styles.SubMap}>{children}</div>
);

export const TransliterationMap = ({ fromScheme, toScheme }) => {
  let content = (
    <span>Refer the transliteration maps of the individual schemes.</span>
  );

  if (toScheme !== 'Multi') {
    const map = makeMap(fromScheme, toScheme);

    content = (
      <>
        <h3>Vowels</h3>
        <SubMap>{map.vowelsMap}</SubMap>
        <h3>Consonants</h3>
        <SubMap>{map.deadConsonantsMap}</SubMap>
        <h3>Vowel Marks</h3>
        <SubMap>{map.vowelMarksMap}</SubMap>
        <h3>Symbols</h3>
        <SubMap>{map.symbolssMap}</SubMap>
      </>
    );
  }

  return (
    <div className={styles.TransliterationMap}>
      <h2>Transliteration Map</h2>
      {content}
    </div>
  );
};

TransliterationMap.propTypes = {
  fromScheme: PropTypes.string.isRequired,
  toScheme: PropTypes.string.isRequired
};

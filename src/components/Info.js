import React from 'react';

import { TransliterationMap } from './TransliterationMap';
import { Tabs } from './Tabs';

import styles from './Info.module.css';

export const Info = props => (
  <div className={styles.Info}>
    <Tabs defaultTab="Transliteration Map" styles={styles}>
      <div label="Usage">
        <h2>Usage</h2>
      </div>
      <div label="Transliteration Map">
        <TransliterationMap {...props} />
      </div>
      <div label="About">
        <h2>vTranslit Web</h2>
        <p>
          A webapp for vTranslit - transliterator between ITRANS and any Indic
          Script.
        </p>
        <p>Currently supports transliteration from ITRANS (Itrn) to:</p>
        <ul>
          <li>Devanagari (Deva)</li>
          <li>Kannada (Knda)</li>
          <li>Tamil (Taml)</li>
          <li>Telugu (Telu)</li>
        </ul>
        <p>
          It also supports transliteration from the above mentioned schemes to
          ITRANS.
        </p>
        <p>
          The core vTranslit is on{' '}
          <a href="https://github.com/vipranarayan14/vtranslit">GitHub</a>.
        </p>
      </div>
    </Tabs>
  </div>
);

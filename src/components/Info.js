import React from 'react';

import { TransliterationMap } from './TransliterationMap';
import { Tabs } from './Tabs';

import styles from './Info.module.css';
import vtranslitWebUiAnnotated from "../images/vtranslit-web-ui-annotated.jpg";

export const Info = props => (
  <div className={styles.Info}>
    <Tabs defaultTab="Transliteration Map" styles={styles}>
      <div label="Usage">
        <h2>Usage</h2>
        <p>
          vTranslit is a tool that helps to transliterate from ITRANS to many
          indic scripts (see ‘About’ tab for currently supported scripts). It
          also supports transliteration from the indic scripts to ITRANS.
        </p>
        <p>
          Scripts such as Devanagari, Kannada, etc. and schemes such as ITRANS,
          IAST, etc. are referred to as <strong>schemes</strong> in vTranslit
          since they all are ordered arrangement of characters.
        </p>
        <h3>The Basics</h3>
        <img
          src={vtranslitWebUiAnnotated}
          alt="vtranslit-web-ui-annotated"
          width="100%"
        />
        <ol>
          <li>Input: Type or paste here the text to be transliterated.</li>
          <li>
            Output: The transliterated output will appear here as you type.
          </li>
          <li>
            From-scheme: Select the scheme from which input text is to be
            transliterated.
          </li>
          <li>
            To-Scheme: Select the scheme to which input text is to be
            transliterated.
          </li>
          <li>Copy Input: Click to copy the input text.</li>
          <li>Copy Output: Click to copy the output text.</li>
          <li>
            TranslitMode: Select the transliteration mode. (Discussed in a
            seperate section below)
          </li>
          <li>
            MultiScheme: Turn on or off transliteration of input to multiple
            schemes. (Discussed in a seperate section below)
          </li>
        </ol>
        <h3>TranslitMode</h3>
        <p>
          TranslitMode helps to control the transliteration process. Text inside
          the markers ‘#&#123;’ and ‘}#’ will be transliterated or not
          transliterated based on the selected TranslitMode. There are three
          modes of transliteration (TranslitMode):
        </p>
        <ol>
          <li>
            All: Everything is transliterated.
            <br />
            Eg: raama raama raama =&gt; राम राम राम
            <br />
            Eg: raama #&#123;raama}# raama =&gt; राम #&#123;राम}# राम
          </li>
          <li>
            Except: Everything <strong>except</strong> the text inside the
            markers are transliterated.
            <br />
            Eg: raama #&#123;raama}# raama =&gt; राम #&#123;raama}# राम
          </li>
          <li>
            Only: <strong>Only</strong> the text inside the markers is
            transliterated. Text outside the markers are not transliterated.
            <br />
            Eg: raama #&#123;raama}# raama =&gt; raama #&#123;राम}# raama
          </li>
        </ol>
        <h3>MultiTranslit</h3>
        <p>
          MultiTranslit is useful when you need to write in more than one
          scheme. Instead of switching between different schemes, you can
          mention the scheme using ‘@’ followed by the scheme-code and start
          writing in ITRANS. And when you want to switch to another scheme you
          can mention that scheme as you did before (
          <code>@&lt;scheme-code&gt;</code>) and continue writing.
        </p>
        <p>
          Scheme-codes for the available schemes can be found in the ‘About’
          tab.
        </p>
        <h4>Syntax</h4>
        <pre>
          <code>#&#123;@&lt;scheme-code&gt; &lt;input-text&gt;}#</code>
        </pre>
        <h5>Steps:</h5>
        <ol>
          <li>
            Start by typing the opening marker <code>#&#123;</code>.
          </li>
          <li>
            Mention the scheme you want the output in, using symbol ‘@’ followed
            by the scheme-code of the scheme.
          </li>
          <li>
            Leave a space and start writing the text to be transliterated. (This
            space will be ignored in the output).
          </li>
          <li>Close the input text with the closing marker.</li>
        </ol>
        <h4>Examples</h4>
        <ul>
          <li>
            #&#123;@Deva raama raama raama}# =&gt; राम राम राम #&#123;@Deva
            raama raama raama}#
          </li>
          <li>
            #&#123;@Taml raama raama raama}# =&gt; राम राम राम ராம ராம ராம
          </li>
          <li>
            #&#123;@Deva raama raama raama}# raama raama raama #&#123;@Taml
            raama raama raama}# =&gt; राम राम राम ராம ராம ராம
          </li>
          <li>
            #&#123;@Deva raama raama raama @Taml raama raama raama}# =&gt; राम
            राम राम ராம ராம ராம
          </li>
        </ul>
        <h4>Points to Note</h4>
        <p>In MultiTranslit</p>
        <ul>
          <li>
            ‘from-scheme’, ‘to-scheme’ and ‘TranslitMode’ would be disabled.
          </li>
          <li>input should be in ‘ITRANS’ scheme only.</li>
          <li>
            text outside the markers are not transliterated and appears in the
            output as it is.
          </li>
          <li>
            text inside the markers are transliterated only if scheme-code is
            specified.
          </li>
        </ul>
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
        <h3>External Links</h3>
        <ul>
          <li>
            ITRANS:{' '}
            <a href="https://www.aczoom.com/itrans/">Developer's Site</a>,{' '}
            <a href="https://en.wikipedia.org/wiki/ITRANS">Wikipedia</a>
          </li>
          <li>
            Other online tools to transliterate between roman schemes and indic
            scripts:
            <ul>
              <li>
                <a href="https://www.aczoom.com/itrans/online/">
                  Online Interface to Itrans
                </a>{' '}
                built by the developer of ITRANS scheme.
              </li>
              <li>
                <a href="http://learnsanskrit.org/tools/sanscript">Sanscript</a>{' '}
                hosted by learnsanskrit.org
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Tabs>
  </div>
);

import React, { Component } from 'react';

import { InputBox } from './components/InputBox';
import { OutputBox } from './components/OutputBox';
import { InputToolBar } from './components/InputToolBar';
import { OutputToolBar } from './components/OutputToolBar';
import { Wrapper } from './components/Wrapper';
import { Notifier } from './components/Notifier';
import { Info } from './components/Info';

import { handleInputChange } from './events/handle-input-change';
import { handleFromSchemeChange } from './events/handle-from-scheme-change';
import { handleToSchemeChange } from './events/handle-to-scheme-change';
import { handleTranslitModeChange } from './events/handle-translit-mode-change';
import { handleMultiSchemeToggle } from './events/handle-multi-scheme-toggle';
import {
  handleInputCopyClick,
  handleOutputCopyClick
} from './events/handle-copy-click';

import './App.css';

import { vtranslit } from './libs/vtranslit';

import {
  allSchemes,
  schemesOtherthanItrn,
  defaultFromScheme,
  defaultToScheme
} from './modules/schemes';

let notifierTimeout;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      output: '',
      availableToSchemes: schemesOtherthanItrn,
      fromScheme: defaultFromScheme,
      toScheme: defaultToScheme,
      translitMode: '0', //use srring so that 0 is not considered 'false' in `initVtranslit`
      message: ''
    };

    this.handleInputChange = handleInputChange.bind(this);
    this.handleFromSchemeChange = handleFromSchemeChange.bind(this);
    this.handleToSchemeChange = handleToSchemeChange.bind(this);
    this.handleTranslitModeChange = handleTranslitModeChange.bind(this);
    this.handleMultiSchemeToggle = handleMultiSchemeToggle.bind(this);
    this.handleInputCopyClick = handleInputCopyClick.bind(this);
    this.handleOutputCopyClick = handleOutputCopyClick.bind(this);

    this.initVtranslit();
  }

  notify(message) {
    this.setState({
      message
    });

    clearTimeout(notifierTimeout);

    notifierTimeout = setTimeout(() => this.setState({ message: '' }), 5000);
  }

  initVtranslit(fromScheme, toScheme, translitMode) {
    this.vt = vtranslit.init(
      fromScheme || this.state.fromScheme,
      toScheme || this.state.toScheme,
      {
        translitMode: Number(translitMode || this.state.translitMode)
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>vTranslit</h1>
        </header>

        <main>
          <Notifier message={this.state.message} />
          <Wrapper>
            <InputToolBar
              handleSchemeChange={this.handleFromSchemeChange}
              fromScheme={this.state.fromScheme}
              toScheme={this.state.toScheme}
              defaultTranslitMode={this.state.translitMode}
              handleTranslitModeChange={this.handleTranslitModeChange}
              handleCopyClick={this.handleInputCopyClick}
              availableFromSchemes={allSchemes}
            />
            <InputBox handleInputChange={this.handleInputChange} />
          </Wrapper>
          <Wrapper>
            <OutputToolBar
              handleSchemeChange={this.handleToSchemeChange}
              fromScheme={this.state.fromScheme}
              toScheme={this.state.toScheme}
              handleMultiSchemeToggle={this.handleMultiSchemeToggle}
              handleCopyClick={this.handleOutputCopyClick}
              availableToSchemes={this.state.availableToSchemes}
            />
            <OutputBox output={this.state.output} />
          </Wrapper>
          <Info
            fromScheme={this.state.fromScheme}
            toScheme={this.state.toScheme}
          />
        </main>
      </div>
    );
  }
}

export default App;

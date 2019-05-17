import React, { Component } from 'react';

import { InputBox } from './components/InputBox';
import { OutputBox } from './components/OutputBox';
import { InputToolBar } from './components/InputToolBar';
import { ToolBar } from './components/ToolBar';
import { Wrapper } from './components/Wrapper';

import './App.css';

import { vtranslit } from './libs/vtranslit';

import { copyToClipboard } from './libs/copy-to-clipboard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      output: '',
      fromScheme: 'Itrn',
      toScheme: 'Deva',
      translitMode: '0' //use srring so that 0 is not considered 'false' in `initVtranslit`
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFromSchemeChange = this.handleFromSchemeChange.bind(this);
    this.handleToSchemeChange = this.handleToSchemeChange.bind(this);
    this.handleTranslitModeChange = this.handleTranslitModeChange.bind(this);
    this.handleInputCopyClick = this.handleInputCopyClick.bind(this);
    this.handleOutputCopyClick = this.handleOutputCopyClick.bind(this);

    this.initVtranslit();
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

  handleInputChange(e) {
    const input = e.target.value;
    this.setState({
      input,
      output: this.vt(input)
    });
  }

  handleFromSchemeChange(e) {
    const fromScheme = e.target.value;

    this.initVtranslit(fromScheme);

    this.setState({
      fromScheme,
      output: this.vt(this.state.input)
    });
  }

  handleToSchemeChange(e) {
    const toScheme = e.target.value;

    this.initVtranslit('', toScheme);

    this.setState({
      toScheme,
      output: this.vt(this.state.input)
    });
  }

  handleTranslitModeChange(e) {
    const translitMode = e.target.value;

    this.initVtranslit('', '', translitMode);

    this.setState({
      translitMode,
      output: this.vt(this.state.input)
    });
  }

  handleInputCopyClick() {
    const { input } = this.state;

    if (input) {
      copyToClipboard(input);
    }
  }

  handleOutputCopyClick() {
    const { output } = this.state;

    if (output) {
      copyToClipboard(output);
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>vTranslit</h1>
        </header>

        <main>
          <Wrapper>
            <InputToolBar
              handleSchemeChange={this.handleFromSchemeChange}
              defaultScheme={this.state.fromScheme}
              defaultTranslitMode={this.state.translitMode}
              handleTranslitModeChange={this.handleTranslitModeChange}
              handleCopyClick={this.handleInputCopyClick}
            />
            <InputBox handleInputChange={this.handleInputChange} />
          </Wrapper>
          <Wrapper>
            <ToolBar
              handleSchemeChange={this.handleToSchemeChange}
              defaultScheme={this.state.toScheme}
              handleCopyClick={this.handleOutputCopyClick}
            />
            <OutputBox output={this.state.output} />
          </Wrapper>
        </main>
      </div>
    );
  }
}

export default App;

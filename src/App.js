import React, { Component } from 'react';

import { InputBox } from './components/InputBox';
import { OutputBox } from './components/OutputBox';
import { InputToolBar } from './components/InputToolBar';
import { OutputToolBar } from './components/OutputToolBar';
import { Wrapper } from './components/Wrapper';
import { Notifier } from './components/Notifier';

import './App.css';

import { availableSchemes, vtranslit } from './libs/vtranslit';

import { copyToClipboard } from './libs/copy-to-clipboard';

let notifierTimeout;

const schemeItrn = availableSchemes.filter(scheme => scheme.code === 'Itrn');
const schemesOtherthanItrn = availableSchemes.filter(
  scheme => scheme.code !== 'Itrn'
);

const defaultFromScheme = 'Itrn';
const defaultToScheme = 'Deva';

const getSelectedOption = selectEle =>
  selectEle.options[selectEle.selectedIndex].text;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      output: '',
      availableFromSchemes: availableSchemes,
      availableToSchemes: schemesOtherthanItrn,
      fromScheme: defaultFromScheme,
      toScheme: defaultToScheme,
      translitMode: '0', //use srring so that 0 is not considered 'false' in `initVtranslit`
      message: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFromSchemeChange = this.handleFromSchemeChange.bind(this);
    this.handleToSchemeChange = this.handleToSchemeChange.bind(this);
    this.handleTranslitModeChange = this.handleTranslitModeChange.bind(this);
    this.handleMultiSchemeToggle = this.handleMultiSchemeToggle.bind(this);
    this.handleInputCopyClick = this.handleInputCopyClick.bind(this);
    this.handleOutputCopyClick = this.handleOutputCopyClick.bind(this);

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

  handleInputChange(e) {
    const input = e.target.value;
    this.setState({
      input,
      output: this.vt(input)
    });
  }

  handleFromSchemeChange(e) {
    const fromScheme = e.target.value;

    let toScheme = defaultToScheme;
    let availableToSchemes = schemesOtherthanItrn;

    if (fromScheme !== defaultFromScheme) {
      toScheme = 'Itrn';
      availableToSchemes = schemeItrn;
    }

    this.initVtranslit(fromScheme, toScheme);

    this.setState({
      toScheme,
      availableToSchemes,
      fromScheme,
      output: this.vt(this.state.input)
    });

    this.notify(`Input scheme changed to '${getSelectedOption(e.target)}'.`);
  }

  handleToSchemeChange(e) {
    const toScheme = e.target.value;

    this.initVtranslit('', toScheme);

    this.setState({
      toScheme,
      output: this.vt(this.state.input)
    });

    this.notify(`Output scheme changed to '${getSelectedOption(e.target)}'.`);
  }

  handleTranslitModeChange(e) {
    const translitMode = e.target.value;

    this.initVtranslit('', '', translitMode);

    this.setState({
      translitMode,
      output: this.vt(this.state.input)
    });

    this.notify(`Set '${getSelectedOption(e.target)}'.`);
  }

  handleMultiSchemeToggle(e) {
    const fromScheme = defaultFromScheme;

    let toScheme = defaultToScheme;

    if (e.target.value === 'on') {
      toScheme = 'Multi';
    }

    this.initVtranslit(fromScheme, toScheme);

    this.setState({
      availableToSchemes: schemesOtherthanItrn,
      fromScheme,
      toScheme,
      output: this.vt(this.state.input)
    });

    this.notify(`Set '${getSelectedOption(e.target)}'.`);
  }

  handleInputCopyClick() {
    const { input } = this.state;

    if (input) {
      copyToClipboard(input);
      this.notify('Input copied to clipboard.');
    } else {
      this.notify('Nothing to copy.');
    }
  }

  handleOutputCopyClick() {
    const { output } = this.state;

    if (output) {
      copyToClipboard(output);

      this.notify('Output copied to clipboard.');
    } else {
      this.notify('Nothing to copy.');
    }
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
              availableFromSchemes={this.state.availableFromSchemes}
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
        </main>
      </div>
    );
  }
}

export default App;

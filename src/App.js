import React, { Component } from 'react';

import { InputBox } from './components/InputBox';
import { OutputBox } from './components/OutputBox';
import { InputToolBar } from './components/InputToolBar';
import { ToolBar } from './components/ToolBar';
import { Wrapper } from './components/Wrapper';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      fromScheme: 'Itrn',
      toScheme: 'Deva',
      translitMode: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFromSchemeChange = this.handleFromSchemeChange.bind(this);
    this.handleToSchemeChange = this.handleToSchemeChange.bind(this);
    this.handleTranslitModeChange = this.handleTranslitModeChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleFromSchemeChange(e) {
    this.setState({
      fromScheme: e.target.value
    });
  }

  handleToSchemeChange(e) {
    this.setState({
      toScheme: e.target.value
    });
  }

  handleTranslitModeChange(e) {
    this.setState({
      translitMode: e.target.value
    });
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
            />
            <InputBox handleInputChange={this.handleInputChange} />
          </Wrapper>
          <Wrapper>
            <ToolBar
              handleSchemeChange={this.handleToSchemeChange}
              defaultScheme={this.state.toScheme}
            />
            <OutputBox
              value={this.state.input}
              fromScheme={this.state.fromScheme}
              toScheme={this.state.toScheme}
              translitMode={this.state.translitMode}
            />
          </Wrapper>
        </main>
      </div>
    );
  }
}

export default App;

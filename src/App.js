import React, { Component } from 'react';

import { InputBox } from './components/InputBox';
import { OutputBox } from './components/OutputBox';
import { ToolBar } from './components/ToolBar';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      fromScheme: 'Itrn',
      toScheme: 'Deva'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFromSchemeSelect = this.handleFromSchemeSelect.bind(this);
    this.handleToSchemeSelect = this.handleToSchemeSelect.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleFromSchemeSelect(e) {
    this.setState({
      fromScheme: e.target.value
    });
  }

  handleToSchemeSelect(e) {
    this.setState({
      toScheme: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>vTranslit</h1>
        </header>

        <main>
          <ToolBar
            handleSchemeSelect={this.handleFromSchemeSelect}
            defaultSelectValue={this.state.fromScheme}
          />
          <InputBox handleInputChange={this.handleInputChange} />
          <ToolBar
            handleSchemeSelect={this.handleToSchemeSelect}
            defaultSelectValue={this.state.toScheme}
          />
          <OutputBox
            value={this.state.input}
            fromScheme={this.state.fromScheme}
            toScheme={this.state.toScheme}
          />
        </main>
      </div>
    );
  }
}

export default App;

import { getSelectedOption } from './../modules/get-selected-option';

export function handleToSchemeChange(e) {
  const toScheme = e.target.value;

  this.initVtranslit('', toScheme);

  this.setState({
    toScheme,
    output: this.vt(this.state.input)
  });

  this.notify(`Output scheme changed to '${getSelectedOption(e.target)}'.`);
}

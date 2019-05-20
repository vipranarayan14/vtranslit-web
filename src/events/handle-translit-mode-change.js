import { getSelectedOption } from './../modules/get-selected-option';

export function handleTranslitModeChange(e) {
  const translitMode = e.target.value;

  this.initVtranslit('', '', translitMode);

  this.setState({
    translitMode,
    output: this.vt(this.state.input)
  });

  this.notify(`Set '${getSelectedOption(e.target)}'.`);
}

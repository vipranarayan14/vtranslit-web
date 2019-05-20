import {
  schemesOtherthanItrn,
  defaultFromScheme,
  defaultToScheme
} from './../modules/schemes';

import { getSelectedOption } from './../modules/get-selected-option';

export function handleMultiSchemeToggle(e) {
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

import {
  schemeItrn,
  schemesOtherthanItrn,
  defaultFromScheme,
  defaultToScheme
} from './../modules/schemes';

import { getSelectedOption } from './../modules/get-selected-option';

export function handleFromSchemeChange(e) {
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

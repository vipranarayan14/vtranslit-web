import { vTranslit } from 'vtranslit';
import { vTranslitSchemeDeva } from 'vtranslit-scheme-deva';
import { vTranslitSchemeItrn } from 'vtranslit-scheme-itrn';
import { vTranslitSchemeKnda } from 'vtranslit-scheme-knda';
import { vTranslitSchemeTaml } from 'vtranslit-scheme-taml';
import { vTranslitSchemeTelu } from 'vtranslit-scheme-telu';

const inputBox = document.querySelector('#inputBox');
const outputBox = document.querySelector('#outputBox');
const fromSchemeSelect = document.querySelector('#fromScheme');
const toSchemeSelect = document.querySelector('#toScheme');
const translitModeSelect = document.querySelector('#translitMode');
const copyButtons = document.querySelectorAll('.copy-button');
const snackbar = document.querySelector('#snackbar');

const vtranslit = vTranslit([
  vTranslitSchemeDeva,
  vTranslitSchemeItrn,
  vTranslitSchemeKnda,
  vTranslitSchemeTaml,
  vTranslitSchemeTelu
]);

const availableSchemes = vtranslit.list();

let vt = () => {};

availableSchemes.forEach(scheme => {

  if (scheme.code === 'Itrn') {

    fromSchemeSelect.options[fromSchemeSelect.options.length] =
      new Option(scheme.name, scheme.code, true, true);

    return;

  }

  fromSchemeSelect.options[fromSchemeSelect.options.length] = new Option(scheme.name, scheme.code);

});

const makeToSchemeOptions = () => {

  if (
    fromSchemeSelect.value === 'Itrn' &&
    toSchemeSelect.length < availableSchemes.length
  ) {

    toSchemeSelect.options.length = 0;

    availableSchemes.forEach(scheme => {

      if (scheme.code !== 'Itrn') {

        toSchemeSelect.options[toSchemeSelect.options.length] =
          new Option(scheme.name, scheme.code);

      }

    });

    toSchemeSelect.options[toSchemeSelect.options.length] =
      new Option('Multiple', 'Multi');

  } else {

    toSchemeSelect.options.length = 0;
    toSchemeSelect.options[0] = new Option('ITRANS', 'Itrn');

  }

};

const copyToClipboard = clipTarget => {

  if (clipTarget.value) {

    clipTarget.select();

    document.execCommand('Copy');

    showSnackbar('Selected text is copied.');

  } else {

    showSnackbar('There is nothing to copy!');

  }

};

const showSnackbar = msg => {

  snackbar.className = 'show';
  snackbar.textContent = msg;

  const snackbarDisplayPeriod = 3000;

  setTimeout(() => {

    snackbar.className = snackbar.className.replace('show', '');

  }, snackbarDisplayPeriod);

};

const alertSchemeChange = (type, schemeSelect) => {

  const selectedOption = schemeSelect.options[schemeSelect.selectedIndex];

  showSnackbar(`The ${type} is changed to '${selectedOption.text}'.`);

};

const transliterate = () => outputBox.value = vt(inputBox.value);

const init = () => {

  makeToSchemeOptions();

  handleToSchemeSelect();

};

const handletranslitModeSelect = () => {

  handleToSchemeSelect();

  const translitModeSelected = translitModeSelect.options[translitModeSelect.selectedIndex];

  showSnackbar(
    `The scheme toggling mode is set to  '${translitModeSelected.text}'.`
  );

  transliterate();

};

const handleFromSchemeSelect = () => {

  init();

  alertSchemeChange('from-scheme', fromSchemeSelect);

  transliterate();

};

const handleToSchemeSelect = e => {

  const options = {

    translitMode: parseInt(translitModeSelect.value)

  };

  vt = vtranslit.init(fromSchemeSelect.value, toSchemeSelect.value, options);

  if (e) {

    alertSchemeChange('to-scheme', toSchemeSelect);

    transliterate();

  }

};

fromSchemeSelect.addEventListener('change', handleFromSchemeSelect);
toSchemeSelect.addEventListener('change', handleToSchemeSelect);
translitModeSelect.addEventListener('change', handletranslitModeSelect);

copyButtons.forEach(button => button.addEventListener('click', e => {

  const clipTarget = document.querySelector(e.target.dataset.clipTarget);

  copyToClipboard(clipTarget);

}));

inputBox.addEventListener('keyup', transliterate);

window.addEventListener('DOMContentLoaded', init);

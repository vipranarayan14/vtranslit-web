import { vTranslit } from 'vtranslit';

const inputBox = document.querySelector('#inputBox');
const outputBox = document.querySelector('#outputBox');
const fromSchemeSelect = document.querySelector('#fromScheme');
const toSchemeSelect = document.querySelector('#toScheme');
const copyButtons = document.querySelectorAll('.copy-button');
const snackbar = document.querySelector('#snackbar');

const availableSchemes = vTranslit.getAvailableSchemes();

let vt = () => {};

availableSchemes.forEach(scheme => {

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

  const selectedOptionText = schemeSelect.options[schemeSelect.selectedIndex].text;

  showSnackbar(`The ${type} is changed to '${selectedOptionText}'.`);

};

const init = () => {

  makeToSchemeOptions();

  handleToSchemeSelect();

};

const handleFromSchemeSelect = () => {

  init();

  alertSchemeChange('from-scheme', fromSchemeSelect);

};

const handleToSchemeSelect = e => {

  vt = vTranslit.init(fromSchemeSelect.value, toSchemeSelect.value);

  if (e) {

    alertSchemeChange('to-scheme', toSchemeSelect);

    transliterate();

  }

};

const transliterate = () => outputBox.value = vt(inputBox.value);

fromSchemeSelect.addEventListener('change', handleFromSchemeSelect);
toSchemeSelect.addEventListener('change', handleToSchemeSelect);

copyButtons.forEach(button => button.addEventListener('click', e => {

  const clipTarget = document.querySelector(e.target.dataset.clipTarget);

  copyToClipboard(clipTarget);

}));

inputBox.addEventListener('keyup', transliterate);

window.addEventListener('DOMContentLoaded', init);

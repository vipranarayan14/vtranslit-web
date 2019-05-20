import { copyToClipboard } from './../libs/copy-to-clipboard';

export function handleInputCopyClick() {
  const { input } = this.state;

  if (input) {
    copyToClipboard(input);

    this.notify('Input copied to clipboard.');
  } else {
    this.notify('Nothing to copy.');
  }
}

export function handleOutputCopyClick() {
  const { output } = this.state;

  if (output) {
    copyToClipboard(output);

    this.notify('Output copied to clipboard.');
  } else {
    this.notify('Nothing to copy.');
  }
}

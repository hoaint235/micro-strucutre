import { WindowEvents } from '@utils';

const toastHelper = {
  success(message: string) {
    window.dispatchEvent(
      new CustomEvent(WindowEvents.TOAST_SUCCESS, { detail: message })
    );
  },
  error(message: string) {
    window.dispatchEvent(
      new CustomEvent(WindowEvents.TOAST_ERROR, { detail: message })
    );
  },
};

export default toastHelper;

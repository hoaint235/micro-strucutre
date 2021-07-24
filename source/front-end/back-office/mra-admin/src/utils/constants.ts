export const WindowEvents: ExtendProps = {
  TOAST_ERROR: "TOAST_ERROR",
  TOAST_SUCCESS: "TOAST_SUCCESS",
  INCREASE_LOADING: "INCREASE_LOADING",
  DECREASE_LOADING: "DECREASE_LOADING",
  CHANGE_LANGUAGE: "CHANGE_LANGUAGE",
};

export const Roles: ExtendProps = {
  Master: "3382AD33-A03E-4126-8648-367C7E75BC0B",
  Admin: "F125EFB3-CA2C-4589-A46D-7201DA35C0D6",
  User: "E95439AD-54DF-4407-92DF-E0135D925400",
};

export const Statuses: ExtendProps = {
  0: "statuses.archived",
  1: "statuses.compromised",
  2: "statuses.confirmed",
  3: "statuses.forceChangePassword",
  4: "statuses.resetRequired",
  5: "statuses.unconfirmed",
  6: "statuses.unknown",
};

export const Regex = Object.freeze({
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\,\.|])(?=.{8,})/, //eslint-disable-line
  phoneNumber: /^[0-9]{6,}$/, //eslint-disable-line
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, //eslint-disable-line
});

export const Errors = Object.freeze({
  required: "errors.requiredField",
  formatEmail: "errors.invalidEmailFormat",
  formatPhoneNumber: "errors.invalidPhoneNumber",
  formatPassword: "errors.invalidPasswordFormat",
  matchingPassword: "errors.passwordIsNotMatching",
});

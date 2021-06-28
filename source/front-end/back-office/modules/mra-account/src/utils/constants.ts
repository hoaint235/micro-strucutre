export const Roles = Object.freeze({
  Master: "3382AD33-A03E-4126-8648-367C7E75BC0B",
  Admin: "F125EFB3-CA2C-4589-A46D-7201DA35C0D6",
  User: "E95439AD-54DF-4407-92DF-E0135D925400",
});

export const Statuses = Object.freeze({
  0: "statuses.archived",
  1: "statuses.compromised",
  2: "statuses.confirmed",
  3: "statuses.forceChangePassword",
  4: "statuses.resetRequired",
  5: "statuses.unconfirmed",
  6: "statuses.unknown",
});

export const WindowEvent = Object.freeze({
  INCREASE_LOADING: "INCREASE_LOADING",
  DECREASE_LOADING: "DECREASE_LOADING",
});

export const REGEX_PHONE_NUMBER = /^[0-9]{6,}$/;
export const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

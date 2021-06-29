export const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const REGEX_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\,\.|])(?=.{8,})/;

export const WindowEvent = Object.freeze({
  INCREASE_LOADING: "INCREASE_LOADING",
  DECREASE_LOADING: "DECREASE_LOADING",
  TOAST_ERROR: "TOAST_ERROR",
});

export const DEFAULT_REDIRECT_URL = "users";

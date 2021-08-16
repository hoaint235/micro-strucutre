const Regex = {
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\,\.|])(?=.{8,})/, //eslint-disable-line
  phoneNumber: /^[0-9]{6,}$/, //eslint-disable-line
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, //eslint-disable-line
  currency: /(\d)(?=(\d\d\d)+(?!\d))/g, //eslint-disable-line
};

export default Regex;

"use strict";
module.exports = {
  title: "Micro-FrontEnd Architecture",
  modules: {
    root: {
      name: "@mra/root-config",
      origin: process.env.MRA_ROOT_URL,
      entry: "mra-root-config.js",
    },
    layout: {
      name: "@mra/layout",
      router: true,
      origin: process.env.MRA_LAYOUT_URL,
      entry: "mra-layout.js",
    },
    authentication: {
      name: "@mra/authentication",
      router: ["sign-in", "forgot-password"],
      origin: process.env.MRA_AUTHENTICATION_URL,
      entry: "mra-authentication.js",
    },
    account: {
      name: "@mra/account",
      router: ["users", "profile"],
      origin: process.env.MRA_ACCOUNT_URL,
      entry: "mra-account.js",
    },
    utility: {
      name: "@mra/utility",
      router: true,
      required: true,
      origin: process.env.MRA_UTILITY_URL,
      entry: "mra-utility.js",
    },
    theme: {
      name: "@mra/theme",
      router: true,
      required: true,
      origin: process.env.MRA_THEME_URL,
      entry: "mra-theme.js",
    },
  },
  dependencies: {
    "single-spa":
      "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",
    react:
      "https://cdn.jsdelivr.net/npm/react@17.0.0/umd/react.production.min.js",
    "react-dom":
      "https://cdn.jsdelivr.net/npm/react-dom@17.0.0/umd/react-dom.production.min.js",
    "@material-ui/icon":
      "https://cdn.jsdelivr.net/npm/@material-ui/core@4.11.4/index.min.js",
    "@material-ui/styles":
      "https://cdn.jsdelivr.net/npm/@material-ui/styles@4.11.4/index.min.js",
    "@material-ui/utils":
      "https://cdn.jsdelivr.net/npm/@material-ui/utils@4.11.2/index.min.js",
    "@material-ui/system":
      "https://cdn.jsdelivr.net/npm/@material-ui/system@4.11.3/index.min.js",
    "@material-ui/icons":
      "https://cdn.jsdelivr.net/npm/@material-ui/icons@4.11.2/index.min.js",
  },
  setup: {
    development: `http://${process.env.MRA_SETUP_HOST}:${process.env.MRA_SETUP_PORT}`,
    production: "/setup-importmap",
  },
};

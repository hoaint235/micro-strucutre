import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import "./i18n";
import Routes from "./routes/Routes";
import { MTypography } from "@mra/theme";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Routes,
  errorBoundary(err, info, props) {
    return <MTypography.Label label="Cannot load this module" />;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

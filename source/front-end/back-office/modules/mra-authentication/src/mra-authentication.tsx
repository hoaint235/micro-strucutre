import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import "./i18n";
import Routes from "./routes";
import { MTypography } from "@mra/theme";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Routes,
  errorBoundary(err, info, props) {
    return <MTypography.Body lable="Cannot load this module" />;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

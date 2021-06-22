import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import "./i18n";
import MainLayout from "./layouts/MainLayout";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: MainLayout,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import MainLayout from "./layouts/MainLayout";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (props) => {
    return <MainLayout>This is a test</MainLayout>;
  },
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

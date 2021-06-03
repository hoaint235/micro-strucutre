import React from "react";
import MainLayout from "./layouts/MainLayout";
import ForgotPassword from "./pages/ForgotPassword";
import SignIn from "./pages/SignIn";

type Pages = {
  [name: string]: React.FunctionComponent;
};

const pages: Pages = {
  SIGN_IN: SignIn,
  FORGOT_PASSWORD: ForgotPassword,
};

export function renderPage(props) {
  const { type, ...restProp } = props;
  const Page = pages[type];
  return (
    <MainLayout>
      <Page {...restProp} />
    </MainLayout>
  );
}

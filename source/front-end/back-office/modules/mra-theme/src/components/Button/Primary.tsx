import React from "react";
import { MfaButtonProps } from "./Button.type";
import Default from "./Default";

const Primary = (props: MfaButtonProps) => {
  return <Default {...props} color="primary" size="large" />;
};

export default Primary;

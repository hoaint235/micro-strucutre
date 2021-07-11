import React from "react";
import { MfaButtonProps } from "./Button.type";
import Default from "./Default";

const Secondary = (props: MfaButtonProps) => {
  return <Default {...props} color="secondary" />;
};

export default Secondary;

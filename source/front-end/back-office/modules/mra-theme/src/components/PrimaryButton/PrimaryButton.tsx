import { Button } from "@material-ui/core";
import React from "react";

const PrimaryButton = (props) => {
  return (
    <Button style={{ background: "red" }} onClick={props.onClick}>
      Hello
    </Button>
  );
};

export default PrimaryButton;

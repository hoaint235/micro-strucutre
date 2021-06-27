import React from "react";
import MaskedInput from "react-text-mask";
import { InputField } from "../../theme";

const Number = () => {
  return (
    <MaskedInput
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      showMask
      render={(ref, props) => (
        <InputField
          innerRef={ref}
          {...props}
          label="fields.phoneNumber"
          name="phoneNumber"
          placeholderChar={"\u2000"}
        />
      )}
    />
  );
};

export default Number;

import { TextFieldProps } from "@material-ui/core";

type RangeProps = {
  min?: number;
  max?: number;
};

export type InputProps = TextFieldProps & {
  maxLength?: number;
  range?: RangeProps;
};

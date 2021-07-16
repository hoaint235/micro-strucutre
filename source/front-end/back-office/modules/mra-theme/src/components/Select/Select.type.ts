import { TextFieldProps } from "@material-ui/core";

export type Select = {
  key: string;
  value: string;
};

export type MfaSelectProps = TextFieldProps & {
  items: Array<Select>;
  onChange: (data: string | string[] | unknown) => void;
};

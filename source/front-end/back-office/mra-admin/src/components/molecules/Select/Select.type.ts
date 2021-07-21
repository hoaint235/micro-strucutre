import { TextFieldProps } from "@material-ui/core";

export type SelectProps = TextFieldProps & {
  items: Array<SelectionProps>;
  onChange: (data: string | string[] | unknown) => void;
};

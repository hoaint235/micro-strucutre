import { TextFieldProps } from "@material-ui/core";

export type SelectProps = Exclude<TextFieldProps, "onChange"> & {
  items: Array<SelectionProps>;
  onChange: (data: any) => void;
};

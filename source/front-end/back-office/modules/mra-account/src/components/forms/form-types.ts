import { TextFieldProps } from "@material-ui/core";
import {
  Control,
  DeepMap,
  FieldError,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

export type Rules = Omit<
  RegisterOptions,
  "valueAsNumber" | "valueAsDate" | "setValueAs"
>;
export type FormProps = TextFieldProps & {
  control: Control<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
  defaultValue?: string;
  requiredField?: boolean;
  rules?: Rules;
  children?: string | React.ReactNode;
};

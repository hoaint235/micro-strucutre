import { ButtonProps, TextFieldProps } from "@material-ui/core";
import {
  Control,
  DeepMap,
  FieldError,
  FieldValues,
  RegisterOptions,
  UseFormReturn,
  ValidationMode,
} from "react-hook-form";

export type Rules = Omit<
  RegisterOptions,
  "valueAsNumber" | "valueAsDate" | "setValueAs"
>;

type FormGridProps = {
  lg?: number;
  md?: number;
  sm?;
  number;
  xs?: number;
};

export type FieldProps = TextFieldProps & {
  control?: Control<FieldValues>;
  errors?: DeepMap<FieldValues, FieldError>;
  defaultValue?: string;
  requiredField?: boolean;
  rules?: Rules;
  children?: string | React.ReactNode;
  gridProps?: FormGridProps;
};

type Mode = keyof ValidationMode;
export type FormOptionsProps = {
  mode?: Mode;
  reValidateMode?: Exclude<Mode, "onTouched" | "all">;
  defaultValues?: any;
};

export type ControlSubmitOptionsProps = {
  render?: (form: UseFormReturn<any>) => any;
  label?: string;
  options?: ButtonProps;
};

export type FormProps = {
  children: any;
  onSubmit: (data: any) => void;
  onValuesChange?: (data: any) => any;
  controlOptions: ControlSubmitOptionsProps;
  options?: FormOptionsProps;
};

import { TextFieldProps } from "@material-ui/core";
import { Mode, RegisterOptions, UseFormReturn } from "react-hook-form";
import { InputProps } from "../components/atoms";

export type Rules = Omit<
  RegisterOptions,
  "valueAsNumber" | "valueAsDate" | "setValueAs"
>;

export type FormOptionsProps = {
  mode?: Mode;
  reValidateMode?: Exclude<Mode, "onTouched" | "all">;
  defaultValues?: any;
};

export type HookFormFieldProps = {
  name: string;
  form: UseFormReturn<any>;
  defaultValue?: any;
  rules?: Rules;
  useDefaultRules?: boolean;
};

export type HookFormProps = {
  children?: any;
  renderChildren?: (form: UseFormReturn<any>) => any;
  onSubmit: (form: any) => void;
  options?: FormOptionsProps;
  renderSubmit: (form: UseFormReturn<any>) => void;
};

export type InputFormProps = InputProps &
  HookFormFieldProps & {
    defaultValue?: string;
    requiredField?: boolean;
    rules?: Rules;
    children?: string | React.ReactNode;
  };

export type SelectFormProps = HookFormFieldProps &
  TextFieldProps & {
    items: Array<SelectionProps>;
    defaultValue?: string;
    requiredField?: boolean;
    rules?: Rules;
    children?: string | React.ReactNode;
  };

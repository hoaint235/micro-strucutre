import { AutoAsynchronousProps, AutocompleteProps } from "./../components";
import { SwitchProps } from "./../components/atoms";
import { TextFieldProps } from "@material-ui/core";
import { RegisterOptions, UseFormReturn } from "react-hook-form";
import { InputProps } from "../components/atoms";

export type Rules = Omit<
  RegisterOptions,
  "valueAsNumber" | "valueAsDate" | "setValueAs"
>;

export type HookFormFieldProps = {
  name: string;
  form: UseFormReturn<any>;
  defaultValue?: any;
};

export type InputFormProps = InputProps &
  HookFormFieldProps & {
    defaultValue?: string;
    children?: string | React.ReactNode;
  };

export type SelectFormProps = HookFormFieldProps &
  TextFieldProps & {
    items: Array<SelectionProps>;
    defaultValue?: string;
    children?: string | React.ReactNode;
  };

export type SwitchFormProps = HookFormFieldProps &
  Omit<SwitchProps, "onChange"> & {
    onChange?: (value: boolean) => void;
  };

export type AutocompleteFormProps = Omit<AutocompleteProps, "onChange"> &
  HookFormFieldProps;

export type AutoAsynchronousFormProps = AutoAsynchronousProps &
  HookFormFieldProps;

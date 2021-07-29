import { TextFieldProps } from "@material-ui/core";
import { AutocompleteProps as DefaultAutocompleteProps } from "@material-ui/lab";
import { InputProps } from "../../atoms";

export type SelectProps = Exclude<TextFieldProps, "onChange"> & {
  items: Array<SelectionProps>;
  onChange: (data: any) => void;
};

export type AutocompleteProps<
  TModel extends SelectionProps = SelectionProps,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = true,
  FreeSolo extends boolean | undefined = false
> = Omit<
  DefaultAutocompleteProps<TModel, Multiple, DisableClearable, FreeSolo>,
  "renderInput" | "options"
> & {
  items: TModel[];
  InputProps?: InputProps;
  label: string;
  name: string;
  noResultFound?: string;
};

export type AutoAsynchronousProps<
  TModel extends SelectionProps = SelectionProps
> = Omit<AutocompleteProps<TModel>, "items" | "loadingText"> & {
  onLoadAsync: (query: string) => Promise<TModel[]>;
  searchLength?: number;
  debounceTime?: number;
  loadingText?: string;
};

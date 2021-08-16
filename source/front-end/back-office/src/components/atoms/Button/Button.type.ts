import { ButtonProps as Props } from "@material-ui/core/Button";

export type ButtonProps = Props & {
  name: string;
  label?: string;
};

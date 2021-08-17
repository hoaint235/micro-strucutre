import { IconButtonProps as DefaultProps } from '@material-ui/core';

export type IconButtonProps = DefaultProps & {
  icon: React.ComponentType<any>;
  label?: string;
  name: string;
};

import { ConfirmationOptionsProps } from '@molecules';
import { createContext } from 'react';

export type DialogResult = {
  success?: boolean;
  payload?: any;
};

export type DialogContextProps = {
  show: (Component: any, props: any) => Promise<DialogResult>;
  confirm: (
    title: string,
    message: string,
    options?: ConfirmationOptionsProps
  ) => Promise<DialogResult>;
};

const defaultValues: DialogContextProps = {
  confirm: () => new Promise(resolve => resolve({})),
  show: () => new Promise(resolve => resolve({})),
};

export default createContext<DialogContextProps>(defaultValues);

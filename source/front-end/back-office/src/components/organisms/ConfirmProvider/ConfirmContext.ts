import { createContext } from 'react';
import { ConfirmationOptionsProps } from '../../molecules';

export type ContextProps = {
  title: string;
  description: string;
  onSubmit: () => void;
  onBeforeCancel?: () => void;
  options?: ConfirmationOptionsProps;
};

export default createContext((props: ContextProps) => {});

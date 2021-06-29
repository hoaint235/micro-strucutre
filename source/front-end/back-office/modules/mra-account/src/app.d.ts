declare type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  data?: any;
};

declare type SelectProps<T = any> = {
  key: string;
  value: T;
};

declare type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

declare type SelectProps<T = any> = {
  key: string;
  value: T;
};

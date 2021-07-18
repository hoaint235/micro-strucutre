declare type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  data?: any;
};

declare type SelectProps = {
  key: string;
  value: string;
};

declare type ToastProps = {
  error(message: string): void;
  success(message: string): void;
};

declare type PartialRecord<K extends string | number | symbol, T> = {
  [P in K]?: T;
};
declare type ExtendProps = {
  [element: string]: any;
};

declare type StateLocation = ExtendProps;

declare type StepProps<TStatus> = {
  status?: TStatus;
  data?: ExtendProps;
};
declare type HandleStepProps<TStatus> = {
  stepObj?: StepProps<TStatus>;
  onNavigateStep?: (obj: StepProps<TStatus>) => void;
};

declare type SignInStatus = "NO_LOGIN" | "FIRST_LOGIN";
declare type ForgotStatus =
  | "SEND_ACTIVATION"
  | "CONFIRMATION_CODE"
  | "CHANGE_SUCCESS";

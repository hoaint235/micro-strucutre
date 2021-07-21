declare type LanguageItem = {
  title: string;
  location: string;
};

declare type MenuItemProps = {
  label: string;
  icon: any;
  path: string;
  pathsActivate?: string[];
  exact?: boolean;
};

declare type TypographyColor =
  | "initial"
  | "inherit"
  | "primary"
  | "secondary"
  | "textPrimary"
  | "textSecondary"
  | "error";

declare type TypographyProps = {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  color?: MfaTypographyColor;
};

declare type SelectionProps = {
  key: string;
  value: string;
};

declare type IconMenuProps = {
  items: Array<any>;
  children?: any;
  color?: "primary" | "secondary";
  renderItem: (item) => any;
  onItemClick: (item) => void;
};

declare type GlobalProps = any;
declare type ClientMetadata = { [key: string]: string };
declare type StepProps<TStatus> = {
  status?: TStatus;
  data?: ExtendProps;
};
declare type HandleStepProps<TStatus> = {
  stepObj?: StepProps<TStatus>;
  onNavigateStep?: (obj: StepProps<TStatus>) => void;
};

declare type SignInStatus = "NO_LOGIN" | "FIRST_LOGIN" | "VERIFY_CODE";
declare type ForgotStatus = "SEND_ACTIVATION" | "CONFIRMATION_CODE";

declare module "model" {
  declare interface Certificate {
    email: string;
    password: string;
  }
}

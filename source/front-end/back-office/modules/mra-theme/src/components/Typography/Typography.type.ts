type MfaTypographyColor =
  | "initial"
  | "inherit"
  | "primary"
  | "secondary"
  | "textPrimary"
  | "textSecondary"
  | "error";

export type MfaTypographyProps = {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  color?: MfaTypographyColor;
};

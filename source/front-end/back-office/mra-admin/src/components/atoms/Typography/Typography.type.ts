export type TypographyColor =
  | "initial"
  | "inherit"
  | "primary"
  | "secondary"
  | "textPrimary"
  | "textSecondary"
  | "error";

export type TypographyProps = {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  color?: TypographyColor;
};

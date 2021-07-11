export type MfaIconMenuProps = {
  items: Array<any>;
  children?: any;
  color?: "primary" | "secondary";
  renderItem: (item) => any;
  onItemClick: (item) => void;
};

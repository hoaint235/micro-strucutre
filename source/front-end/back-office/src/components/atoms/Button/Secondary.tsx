import { ButtonProps } from './Button.type';
import Default from './Default';

const Secondary = (props: ButtonProps) => (
  <Default {...props} color="secondary" />
);

export default Secondary;

import { ButtonProps } from "./Button.type";
import Default from "./Default";

const Secondary = (props: ButtonProps) => {
  return <Default {...props} color="secondary" />;
};

export default Secondary;

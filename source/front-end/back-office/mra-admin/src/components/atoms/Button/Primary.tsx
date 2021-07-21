import { ButtonProps } from "./Button.type";
import Default from "./Default";

const Primary = (props: ButtonProps) => {
  return <Default {...props} color="primary" />;
};

export default Primary;

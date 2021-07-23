import Default from "./Default";
import { IconButtonProps } from "./IconButton.type";

const Secondary = (props: IconButtonProps) => {
  return <Default {...props} color="secondary" />;
};

export default Secondary;

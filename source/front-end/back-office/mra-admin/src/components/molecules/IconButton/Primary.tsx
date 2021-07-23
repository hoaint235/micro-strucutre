import Default from "./Default";
import { IconButtonProps } from "./IconButton.type";

const Primary = (props: IconButtonProps) => {
  return <Default {...props} color="primary" />;
};

export default Primary;

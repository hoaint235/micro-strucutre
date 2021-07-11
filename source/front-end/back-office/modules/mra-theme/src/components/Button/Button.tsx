import Primary from "./Primary";
import Secondary from "./Secondary";
import Default from "./Default";

type ButtonProps = {
  Primary: typeof Primary;
  Secondary: typeof Secondary;
  Default: typeof Default;
};

const Button: ButtonProps = {
  Primary: Primary,
  Secondary: Secondary,
  Default: Default,
};

export default Button;

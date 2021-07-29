import Primary from "./Primary";
import Secondary from "./Secondary";
import Default from "./Default";

type Props = {
  Primary: typeof Primary;
  Secondary: typeof Secondary;
  Default: typeof Default;
};

const Button: Props = {
  Primary: Primary,
  Secondary: Secondary,
  Default: Default,
};

export default Button;
export * from "./Button.type";

import Default from './Default';
import Primary from './Primary';
import Secondary from './Secondary';

type Props = {
  Default: typeof Default;
  Primary: typeof Primary;
  Secondary: typeof Secondary;
};

const IconButton: Props = {
  Default,
  Primary,
  Secondary,
};

export default IconButton;

import Search from './Search';
import Input from './Input';
import Password from './Password';

type Props = {
  Input: typeof Input;
  Search: typeof Search;
  Password: typeof Password;
};

const Field: Props = {
  Input,
  Search,
  Password,
};

export default Field;

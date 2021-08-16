import Search from "./Search";
import Input from "./Input";
import Password from "./Password";

type Props = {
  Input: typeof Input;
  Search: typeof Search;
  Password: typeof Password;
};

const Field: Props = {
  Input: Input,
  Search: Search,
  Password: Password,
};

export default Field;

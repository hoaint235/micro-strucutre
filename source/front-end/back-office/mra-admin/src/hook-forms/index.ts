import Email from "./Email";
import Input from "./Input";
import Password from "./Password";

type Props = {
  Input: typeof Input;
  Password: typeof Password;
  Email: typeof Email;
};

const Form: Props = {
  Input: Input,
  Password: Password,
  Email: Email,
};

export default Form;

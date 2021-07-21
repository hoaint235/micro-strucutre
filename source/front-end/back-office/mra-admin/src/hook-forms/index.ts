import Email from "./Email";
import Input from "./Input";
import MultipleSelect from "./MultipleSelect";
import Password from "./Password";
import SingleSelect from "./SingleSelect";

type Props = {
  Input: typeof Input;
  Password: typeof Password;
  Email: typeof Email;
  MultipleSelect: typeof MultipleSelect;
  SingleSelect: typeof SingleSelect;
};

const Form: Props = {
  Input: Input,
  Password: Password,
  Email: Email,
  MultipleSelect: MultipleSelect,
  SingleSelect: SingleSelect,
};

export default Form;

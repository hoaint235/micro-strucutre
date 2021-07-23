import Email from "./Email";
import Input from "./Input";
import MultipleSelect from "./MultipleSelect";
import Password from "./Password";
import SingleSelect from "./SingleSelect";
import Switch from "./Switch";

type Props = {
  Input: typeof Input;
  Password: typeof Password;
  Email: typeof Email;
  MultipleSelect: typeof MultipleSelect;
  SingleSelect: typeof SingleSelect;
  Switch: typeof Switch;
};

const Form: Props = {
  Input: Input,
  Password: Password,
  Email: Email,
  MultipleSelect: MultipleSelect,
  SingleSelect: SingleSelect,
  Switch: Switch,
};

export default Form;

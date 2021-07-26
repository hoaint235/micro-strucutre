import Input from "./Input";
import MultipleSelect from "./MultipleSelect";
import Password from "./Password";
import SingleSelect from "./SingleSelect";
import Switch from "./Switch";
import Autocomplete from "./Autocomplete";
import SelectAsynchronous from "./SelectAsynchronous";

type Props = {
  Input: typeof Input;
  Password: typeof Password;
  MultipleSelect: typeof MultipleSelect;
  SingleSelect: typeof SingleSelect;
  Switch: typeof Switch;
  Autocomplete: typeof Autocomplete;
  SelectAsynchronous: typeof SelectAsynchronous;
};

const Form: Props = {
  Input: Input,
  Password: Password,
  MultipleSelect: MultipleSelect,
  SingleSelect: SingleSelect,
  Switch: Switch,
  Autocomplete: Autocomplete,
  SelectAsynchronous: SelectAsynchronous,
};

export default Form;

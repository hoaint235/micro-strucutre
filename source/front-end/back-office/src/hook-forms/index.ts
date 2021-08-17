import Input from './Input';
import MultipleSelect from './MultipleSelect';
import Password from './Password';
import SingleSelect from './SingleSelect';
import Switch from './Switch';
import Autocomplete from './Autocomplete';
import SelectAsynchronous from './SelectAsynchronous';

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
  Input,
  Password,
  MultipleSelect,
  SingleSelect,
  Switch,
  Autocomplete,
  SelectAsynchronous,
};

export default Form;

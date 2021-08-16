import Multiple from "./Multiple";
import Single from "./Single";
import Autocomplete from "./Autocomplete";
import Asynchronous from "./Asynchronous";

type Props = {
  Single: typeof Single;
  Multiple: typeof Multiple;
  Autocomplete: typeof Autocomplete;
  Asynchronous: typeof Asynchronous;
};

const Select: Props = {
  Multiple: Multiple,
  Single: Single,
  Autocomplete: Autocomplete,
  Asynchronous: Asynchronous,
};

export default Select;

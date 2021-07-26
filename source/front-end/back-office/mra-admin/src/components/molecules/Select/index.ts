import Multiple from "./Multiple";
import Single from "./Single";
import Autocomplete from "./Autocomplete";

type Props = {
  Single: typeof Single;
  Multiple: typeof Multiple;
  Autocomplete: typeof Autocomplete;
};

const Select: Props = {
  Multiple: Multiple,
  Single: Single,
  Autocomplete: Autocomplete,
};

export default Select;

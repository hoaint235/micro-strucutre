import SearchField from "./SearchField";
import InputField from "./InputField";

type MfaFieldProps = {
  Input: typeof InputField;
  Search: typeof SearchField;
};

const Field: MfaFieldProps = {
  Input: InputField,
  Search: SearchField,
};

export default Field;

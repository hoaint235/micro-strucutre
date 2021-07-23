import Multiple from "./Multiple";
import Single from "./Single";

type Props = {
  Single: typeof Single;
  Multiple: typeof Multiple;
};

const Select: Props = {
  Multiple: Multiple,
  Single: Single,
};

export default Select;

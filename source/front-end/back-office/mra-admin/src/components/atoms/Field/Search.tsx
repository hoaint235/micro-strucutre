import { InputAdornment, TextFieldProps } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Input from "./Input";

const SearchField = (props: TextFieldProps) => {
  return (
    <Input
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchField;

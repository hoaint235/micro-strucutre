import { InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { InputProps } from "./Field.type";
import Input from "./Input";

const SearchField = (props: InputProps) => {
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

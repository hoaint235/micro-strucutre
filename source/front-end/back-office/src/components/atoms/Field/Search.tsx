import { InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useState } from "react";
import { InputProps } from "./Field.type";
import Input from "./Input";

type SearchFieldProps = Omit<InputProps, "onSubmit"> & {
  onSubmit: (value: string) => void;
};

const SearchField = (props: SearchFieldProps) => {
  const { onSubmit, ...restProps } = props;
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      onSubmit(keyword);
    }
  };

  return (
    <Input
      onChange={(e) => setKeyword(e.target.value)}
      onKeyDown={handleSubmit}
      {...restProps}
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

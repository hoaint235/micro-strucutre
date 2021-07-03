import { Box, Hidden, IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import { SearchField } from "../../../../components";

const SearchContainer = () => {
  return (
    <Box ml={{ xs: 0, md: 2 }}>
      <Hidden mdUp>
        <IconButton color="primary">
          <Search />
        </IconButton>
      </Hidden>
      <Hidden smDown>
        <SearchField
          name="search"
          placeholder="Search"
          size="small"
          style={{ width: 434 }}
        />
      </Hidden>
    </Box>
  );
};

export default SearchContainer;

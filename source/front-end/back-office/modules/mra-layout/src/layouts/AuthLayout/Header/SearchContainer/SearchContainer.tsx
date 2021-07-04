import { Box, Hidden, IconButton, SearchField } from "@mra/theme";
import { Search } from "@material-ui/icons";
import React from "react";

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

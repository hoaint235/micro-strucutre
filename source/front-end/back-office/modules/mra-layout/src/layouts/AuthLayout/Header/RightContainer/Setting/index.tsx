import { Box, IconButton } from "@mra/theme";
import { Settings } from "@material-ui/icons";
import React from "react";

const Setting = () => {
  return (
    <Box>
      <IconButton color="primary">
        <Settings />
      </IconButton>
    </Box>
  );
};

export default Setting;

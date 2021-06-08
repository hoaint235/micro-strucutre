import { Box, IconButton } from "@material-ui/core";
import { Language as LanguageIcon } from "@material-ui/icons";
import React from "react";

const Language = () => {
  return (
    <Box>
      <IconButton color="secondary">
        <LanguageIcon />
      </IconButton>
    </Box>
  );
};

export default Language;

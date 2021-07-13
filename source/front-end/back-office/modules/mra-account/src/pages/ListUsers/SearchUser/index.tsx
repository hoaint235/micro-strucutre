import { Box, Grid, makeStyles, MButton, MField } from "@mra/theme";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  rightContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const SearchUser = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <Grid container alignItems="center">
      <Grid item sm={4} xs={12}>
        <MField.Search name="search-user" placeholder="Search" />
      </Grid>
      <Grid item sm={8} xs={12} className={classes.rightContainer}>
        <Box mt={{ xs: 2, sm: 0 }}>
          <MButton.Primary
            variant="outlined"
            onClick={() => history.push("/users/create")}
            label={t("account.addUser")}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SearchUser;

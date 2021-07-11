import { Box, Grid, makeStyles, MButton } from "@mra/theme";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SearchField from "../../../theme/components/SearchField";
import AddUser from "../../AddUser";

const useStyles = makeStyles(() => ({
  rightContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const SearchUser = () => {
  const classes = useStyles();
  const [openAddUser, setOpenAddUser] = useState(false);
  const { t } = useTranslation();

  const onAddUserPage = () => {
    setOpenAddUser(true);
  };

  const onHandleClose = () => {
    setOpenAddUser(false);
  };

  return (
    <Grid container alignItems="center">
      <Grid item sm={4} xs={12}>
        <SearchField name="search-user" placeholder="Search" size="small" />
      </Grid>
      <Grid item sm={8} xs={12} className={classes.rightContainer}>
        <Box mt={{ xs: 2, sm: 0 }}>
          <MButton.Primary
            variant="outlined"
            onClick={onAddUserPage}
            label={t("account.addUser")}
          />
        </Box>
      </Grid>

      <AddUser isOpen={openAddUser} onClose={onHandleClose} />
    </Grid>
  );
};

export default SearchUser;

import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { PrimaryButton } from "../../../theme";
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
          <PrimaryButton
            variant="outlined"
            color="primary"
            onClick={onAddUserPage}
            label="account.addUser"
          />
        </Box>
      </Grid>

      <AddUser isOpen={openAddUser} onClose={onHandleClose} />
    </Grid>
  );
};

export default SearchUser;

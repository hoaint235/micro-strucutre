import { Box, Drawer, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { Logo } from "../../../../components";
import MenuList from "../MenuList/MenuList";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 260,
  },
  logoContainer: {
    display: "flex",
    padding: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const MobileMenu = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const navigateDefaultPage = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.mobileDrawer }}
      open={props.openMenu}
      onClose={props.contentHide}
      variant="temporary"
    >
      <div role="presentation" onClick={props.contentHide}>
        <Box component={Paper}>
          <div className={classes.logoContainer}>
            <Logo src="images/logo.svg" onClick={navigateDefaultPage} />
          </div>
          <MenuList />
        </Box>
      </div>
    </Drawer>
  );
};

export default MobileMenu;

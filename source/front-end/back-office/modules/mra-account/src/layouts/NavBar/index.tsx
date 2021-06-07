import { Drawer, Hidden, makeStyles } from "@material-ui/core";
import React, { Fragment, useMemo } from "react";
import MenuList from "./MenuList";

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 260,
  },
  desktopDrawer: {
    width: 260,
    top: 88,
    height: "calc(100% - 64px)",
    borderRight: "none",
    background: "#fff",
  },
}));

const NavBar = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Hidden mdUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          open={props.openMenu}
          onClose={props.contentHide}
          variant="temporary"
        >
          <div role="presentation" onClick={props.contentHide}>
            <MenuList />
          </div>
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <div style={{ flexShrink: 0, width: 260 }}>
          <Drawer
            style={{ zIndex: 10 }}
            anchor="left"
            classes={{ paper: classes.desktopDrawer }}
            open
            variant="persistent"
          >
            <MenuList />
          </Drawer>
        </div>
      </Hidden>
    </Fragment>
  );
};

export default NavBar;

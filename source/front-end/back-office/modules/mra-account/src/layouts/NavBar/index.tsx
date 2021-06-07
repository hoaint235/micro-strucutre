import { Hidden } from "@material-ui/core";
import React, { Fragment } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const NavBar = (props) => {
  return (
    <Fragment>
      <Hidden mdUp>
        <MobileMenu {...props} />
      </Hidden>
      <Hidden smDown>
        <DesktopMenu {...props} />
      </Hidden>
    </Fragment>
  );
};

export default NavBar;

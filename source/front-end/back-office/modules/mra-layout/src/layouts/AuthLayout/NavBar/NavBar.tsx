import { Hidden } from "@material-ui/core";
import React, { Fragment } from "react";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

const NavBar = (props) => {
  return (
    <Fragment>
      <Hidden mdUp>
        <MobileMenu {...props} />
      </Hidden>
      <Hidden mdDown>
        <DesktopMenu {...props} />
      </Hidden>
    </Fragment>
  );
};

export default NavBar;

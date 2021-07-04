import { Hidden } from "@mra/theme";
import React, { Fragment } from "react";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

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

import { Hidden } from "@material-ui/core";
import { Fragment } from "react";
import DesktopMenu from "../DesktopMenu";
import MobileMenu from "../MobileMenu";

const NavBar = (props: any) => {
  return (
    <Fragment>
      <Hidden mdUp>
        <MobileMenu {...props} />
      </Hidden>
      <Hidden smDown>
        <DesktopMenu />
      </Hidden>
    </Fragment>
  );
};

export default NavBar;

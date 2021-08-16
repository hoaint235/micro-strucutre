import { Hidden } from "@material-ui/core";
import { Fragment } from "react";
import DesktopMenu from "../DesktopMenu";
import MobileMenu from "../MobileMenu";

type Props = {
  openDesktop: boolean;
  openMobile: boolean;
  onClose: () => void;
};

const NavBar = (props: Props) => {
  const { openDesktop, openMobile, onClose } = props;

  return (
    <Fragment>
      <Hidden mdUp>
        <MobileMenu isOpen={openMobile} onClose={onClose} />
      </Hidden>
      <Hidden smDown>
        <DesktopMenu isOpen={openDesktop} />
      </Hidden>
    </Fragment>
  );
};

export default NavBar;

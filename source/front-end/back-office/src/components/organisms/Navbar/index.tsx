import { Hidden } from '@material-ui/core';
import DesktopMenu from '../DesktopMenu';
import MobileMenu from '../MobileMenu';

type Props = {
  openDesktop: boolean;
  openMobile: boolean;
  onClose: () => void;
};

const NavBar = (props: Props) => {
  const { openDesktop, openMobile, onClose } = props;

  return (
    <>
      <Hidden mdUp>
        <MobileMenu isOpen={openMobile} onClose={onClose} />
      </Hidden>
      <Hidden smDown>
        <DesktopMenu isOpen={openDesktop} />
      </Hidden>
    </>
  );
};

export default NavBar;

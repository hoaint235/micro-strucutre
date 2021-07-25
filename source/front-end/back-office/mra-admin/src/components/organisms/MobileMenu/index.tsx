import { Box, Drawer, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { WindowEvents } from "../../../utils";
import { Logo } from "../../atoms";
import MenuList from "../MenuList";

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

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = (props: Props) => {
  const { isOpen, onClose } = props;

  const classes = useStyles();
  const history = useHistory();

  const navigateDefaultPage = (event: React.SyntheticEvent) => {
    event.preventDefault();
    history.push("/");
  };

  useEffect(() => {
    window.addEventListener(WindowEvents.CLOSE_MOBILE_MENU, () => onClose());
    return () =>
      window.removeEventListener(WindowEvents.CLOSE_MOBILE_MENU, () =>
        onClose()
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.mobileDrawer }}
      open={isOpen}
      onClose={onClose}
      variant="temporary"
    >
      <div role="presentation">
        <Box component={Paper}>
          <div className={classes.logoContainer}>
            <Logo
              href="/"
              src="/images/logo.svg"
              onClick={navigateDefaultPage}
            />
          </div>
          <MenuList />
        </Box>
      </div>
    </Drawer>
  );
};

export default MobileMenu;

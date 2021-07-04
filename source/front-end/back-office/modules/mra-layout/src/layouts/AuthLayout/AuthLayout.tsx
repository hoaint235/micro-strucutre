import { Box, makeStyles, UIProvider } from "@mra/theme";
import React, { useState } from "react";
import { LoadingProvider, ToastProvider } from "../../components";

import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 80,
    backgroundColor: "rgb(227, 242, 253)",
    flexGrow: 1,
    marginRight: 20,
    minHeight: "calc(100vh - 80px)",
    transition: "margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
    borderRadius: 12,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
      width: "calc(100% - 260px)",
    },
  },
}));

const AuthLayout = (props) => {
  const { children } = props;
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);

  const onToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <UIProvider name="mra-layout">
      <div style={{ display: "flex" }}>
        <Header onToggle={onToggleMenu} />
        <NavBar openMenu={openMenu} contentHide={() => setOpenMenu(false)} />
        <div className={classes.root}>
          <Box component="div" p={3}>
            {children}
          </Box>
        </div>
      </div>
      <ToastProvider />
      <LoadingProvider />
    </UIProvider>
  );
};

export default AuthLayout;

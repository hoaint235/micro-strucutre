import { Box, makeStyles, Theme } from "@material-ui/core";
import React, { useState } from "react";
import {
  LoadingProvider,
  Theme as MaterialProvider,
  ToastProvider,
} from "../../components";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    marginTop: 80,
    backgroundColor: "rgb(227, 242, 253)",
    flexGrow: 1,
    minHeight: "calc(100vh - 80px)",
    transition: "margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
    borderRadius: 12,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      width: "calc(100% - 260px)",
    },
  },
}));

const AuthLayout = (props) => {
  const { children } = props;
  console.log(children);
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);

  const onToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <MaterialProvider name="mra-layout">
      <div style={{ display: "flex" }}>
        {/* <Header onToggle={onToggleMenu} /> */}
        <NavBar openMenu={openMenu} contentHide={() => setOpenMenu(false)} />
        <div className={classes.mainContainer}>
          <Box component="div" p={3}>
            {children}
          </Box>
        </div>
      </div>
      <ToastProvider />
      <LoadingProvider />
    </MaterialProvider>
  );
};

export default AuthLayout;

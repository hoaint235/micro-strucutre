import { Box, makeStyles, Theme } from "@material-ui/core";
import { Router } from "@material-ui/icons";
import React, { StrictMode, useState } from "react";
import { Switch } from "react-router-dom";
import {
  LoadingProvider,
  Theme as MaterialProvider,
  ToastProvider,
} from "../../components";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Routes from "./Routes/Routes";

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    marginTop: 80,
    backgroundColor: "rgb(227, 242, 253)",
    flexGrow: 1,
    minHeight: "calc(100vh - 80px)",
    transition: "margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
    marginRight: 20,
    borderRadius: 12,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      width: "calc(100% - 260px)",
    },
  },
}));

const AuthLayout = () => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);

  const onToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <MaterialProvider name="mra-layout">
      <StrictMode>
        <Router>
          <div style={{ display: "flex" }}>
            <Header onToggle={onToggleMenu} />
            <NavBar
              openMenu={openMenu}
              contentHide={() => setOpenMenu(false)}
            />
            <div className={classes.mainContainer}>
              <Box component="div" p={3}>
                <Switch>
                  <Routes />
                </Switch>
              </Box>
            </div>
          </div>
        </Router>

        <ToastProvider />
        <LoadingProvider />
      </StrictMode>
    </MaterialProvider>
  );
};

export default AuthLayout;

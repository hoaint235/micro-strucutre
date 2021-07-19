import { Box, makeStyles, MProvider, Theme } from "@mra/theme";
import React, { useState } from "react";
import { LoadingProvider, ToastProvider } from "../../components";
import { BrowserRouter as Router } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  container: {
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
    <MProvider name="mra-layout">
      <Router>
        <div className={classes.root}>
          <Header onToggle={onToggleMenu} />
          <NavBar openMenu={openMenu} contentHide={() => setOpenMenu(false)} />
          <Box component="div" mt={10} className={classes.container}>
            <Scrollbars
              autoHide
              autoHideTimeout={500}
              autoHideDuration={200}
              autoHeight={true}
              autoHeightMin={`calc(100vh - 80px)`}
            >
              <Box component="div" p={3}>
                {children}
              </Box>
            </Scrollbars>
          </Box>
        </div>
        <ToastProvider />
        <LoadingProvider />
      </Router>
    </MProvider>
  );
};

export default AuthLayout;

import { Box, makeStyles, Theme } from "@material-ui/core";
import React, { StrictMode, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../Header";
import NavBar from "../NavBar";
import "react-toastify/dist/ReactToastify.css";
import MessageContainer from "../../components/ToastMessage";
import { MaterialProvider } from "../../theme";
import Routes from "./Routes";

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

const MainLayout = (props) => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);

  const onToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <MaterialProvider>
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
                  <Routes {...props} />
                </Switch>
              </Box>
            </div>
          </div>
        </Router>

        <MessageContainer />
      </StrictMode>
    </MaterialProvider>
  );
};

export default MainLayout;

import { Hidden, IconButton, useMediaQuery, MLogo, Theme } from "@mra/theme";
import React from "react";
import { useHistory } from "react-router-dom";
import { Menu } from "@material-ui/icons";
import useStyles from "./LeftContainer.style";

type Props = {
  onToggleMenu: () => void;
};

const LeftContainer = (props: Props) => {
  const classes = useStyles();
  const matches = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
  const history = useHistory();

  const onToggle = () => {
    if (matches) {
      props.onToggleMenu();
    }
  };

  const navigateDefaultPage = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <span className={classes.logoContainer}>
          <MLogo
            href="/"
            src={`${process.env.ROOT_URL}/images/logo.svg`}
            onClick={navigateDefaultPage}
          />
        </span>
      </Hidden>
      <IconButton
        color="primary"
        className={classes.toggleMenu}
        onClick={onToggle}
      >
        <Menu />
      </IconButton>
    </div>
  );
};

export default LeftContainer;

import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { Menus } from "../../../../configurations";
import { MenuItem } from "../../../../components";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    height: "calc(100vh - 88px)",
  },
}));

const MenuList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {Menus.map((menu, index) => (
        <MenuItem key={index} {...menu} />
      ))}
    </div>
  );
};

export default MenuList;

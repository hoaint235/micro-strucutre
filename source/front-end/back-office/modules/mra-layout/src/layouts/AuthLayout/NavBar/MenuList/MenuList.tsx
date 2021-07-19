import React from "react";
import { makeStyles } from "@mra/theme";
import { Menus } from "../../../../configurations";
import { MenuItem } from "../../../../components";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    alignItems: "flex-start",
    height: "calc(100vh - 104px)",
    display: "block",
  },
}));

const MenuList = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {Menus.map((menu, index) => (
        <MenuItem key={index} {...menu} />
      ))}
    </div>
  );
};

export default MenuList;

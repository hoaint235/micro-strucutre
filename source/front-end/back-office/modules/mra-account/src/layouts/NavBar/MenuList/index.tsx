import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import MenuItem from "../../../components/controls/MenuItem";
import { Home } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    height: "calc(100vh - 88px)",
  },
}));

const MenuList = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <MenuItem
        path="/(users|add-user)/"
        label={t("menus.users")}
        icon={Home}
      />
    </div>
  );
};

export default MenuList;

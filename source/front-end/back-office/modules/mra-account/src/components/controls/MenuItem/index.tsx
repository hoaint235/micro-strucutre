import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import React, { useCallback, useMemo } from "react";
import {
  useStyleListItem,
  useStyleItemIcon,
  useStyleItemText,
  useStyles,
} from "./MenuItem.style";
import { MenuItemProps } from "./MenuItem.type";

const MenuItem = (props: MenuItemProps) => {
  const { label, path, pathsActivate, exact, icon: Icon } = props;

  const { t } = useTranslation();
  const classesListItem = useStyleListItem();
  const classesItemIcon = useStyleItemIcon();
  const classesItemText = useStyleItemText();
  const classes = useStyles();
  const { pathname } = useLocation();

  const checkActivate = useCallback(() => {
    if (pathsActivate) {
      return pathsActivate.includes(pathname);
    }

    return path === pathname;
  }, [pathname, path, pathsActivate]);

  const MenuLink = useMemo(
    () =>
      React.forwardRef((linkProps, ref: any) => (
        <NavLink
          ref={ref}
          to={path}
          exact={exact}
          {...linkProps}
          isActive={checkActivate}
          activeClassName={classes.activeLink}
        />
      )),
    [path, checkActivate]
  );

  return (
    <ListItem button component={MenuLink} classes={{ ...classesListItem }}>
      <ListItemIcon classes={{ ...classesItemIcon }}>
        <Icon />
      </ListItemIcon>
      <ListItemText classes={{ ...classesItemText }}>{t(label)}</ListItemText>
    </ListItem>
  );
};

export default MenuItem;

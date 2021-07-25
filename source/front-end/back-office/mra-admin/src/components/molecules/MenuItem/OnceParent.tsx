import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { useCallback, useMemo, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { matchPath, NavLink, useLocation } from "react-router-dom";
import {
  useStyleListItem,
  useStyleItemIcon,
  useStyleItemText,
  useStyles,
} from "./OnceParent.style";

const OnceParent = (props: MenuItemProps) => {
  const { label, path, exact, icon: Icon, pathsActivate } = props;
  const classesListItem = useStyleListItem();
  const classesItemIcon = useStyleItemIcon();
  const classesItemText = useStyleItemText();
  const classes = useStyles();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const checkActivate = useCallback(() => {
    const isActivate = pathsActivate
      ? pathsActivate.some(
          (path) =>
            !!matchPath(pathname, { path: path, exact: true, strict: true })
        )
      : path === pathname;
    return isActivate;
  }, [pathname, path, pathsActivate]);

  const MenuLink = useMemo(
    () =>
      forwardRef((linkProps, ref: any) => (
        <NavLink
          ref={ref}
          to={path}
          exact={exact}
          isActive={checkActivate}
          activeClassName={classes.activeLink}
          {...linkProps}
        />
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [path, exact, checkActivate, pathname]
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

export default OnceParent;

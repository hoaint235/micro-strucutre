import { matchPath, NavLink, useHistory, useLocation } from "react-router-dom";
import {
  useStyleListItem,
  useStyleItemIconParent,
  useStyleItemIconChildren,
  useStyleItemText,
  useStyles,
} from "./MenuItem.style";
import { useTranslation } from "react-i18next";
import React, {
  forwardRef,
  useCallback,
  useMemo,
  Fragment,
  useState,
} from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from "@material-ui/core";
import { WindowEvents } from "../../../utils";
import { FiberManualRecord, ExpandMore, ExpandLess } from "@material-ui/icons";
import clsx from "clsx";
import { IMenuItem, PermissionType } from "../../../models";
import { useStateSelector } from "../../../store";

const MenuItem = (props: IMenuItem) => {
  const { icon: Icon, label, children } = props;
  const [open, setOpen] = useState<boolean>(true);
  const { pathname } = useLocation();
  const classesListItem = useStyleListItem();
  const classesItemIconParent = useStyleItemIconParent();
  const classesItemIconChildren = useStyleItemIconChildren();
  const classesItemText = useStyleItemText();
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();
  const { currentPermissions } = useStateSelector((state) => state.appState);

  const checkValidPermission = useCallback(
    (permission?: PermissionType) =>
      permission && currentPermissions.some((x) => x === permission),
    [currentPermissions]
  );

  const isMatch = (path: string) =>
    !!matchPath(pathname, { path: path, exact: true, strict: true });

  const checkActivate = useCallback(
    (path?: string, activePaths?: string[]) => {
      const active = activePaths
        ? activePaths.some((x: string) => isMatch(x))
        : isMatch(path || "");
      return active;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]
  );

  const onCloseMobileMenu = (
    event: React.SyntheticEvent,
    path?: string,
    permission?: PermissionType
  ) => {
    event.preventDefault();
    history.push(path || "/", { permission });
    window.dispatchEvent(new CustomEvent(WindowEvents.CLOSE_MOBILE_MENU));
  };

  const MenuLink = useMemo(
    () =>
      forwardRef(
        ({ path, exact, activePaths, ...restProps }: any, ref: any) => (
          <NavLink
            ref={ref}
            to={path}
            exact={exact}
            isActive={() => checkActivate(path, activePaths)}
            activeClassName={classes.activeLink}
            {...restProps}
          />
        )
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [checkActivate, pathname]
  );

  const MenuChildren = useCallback(
    (props: IMenuItem, isChildren: boolean) => {
      const { path, label, icon: Icon, permission, ...restProps } = props;
      if (!checkValidPermission(permission)) {
        return null;
      }

      return (
        <ListItem
          onClick={(e: React.SyntheticEvent) =>
            onCloseMobileMenu(e, path, permission)
          }
          id={`menu-${label}`}
          key={path}
          button
          path={path}
          component={MenuLink}
          classes={{ ...classesListItem }}
          className={clsx({
            [classes.children]: isChildren,
          })}
          {...restProps}
        >
          <ListItemIcon classes={{ ...classesItemIconChildren }}>
            {isChildren ? (
              <FiberManualRecord className={classes.iconChildren} />
            ) : (
              <Icon />
            )}
          </ListItemIcon>
          <ListItemText classes={{ ...classesItemText }}>
            {t(label)}
          </ListItemText>
        </ListItem>
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [MenuLink, checkValidPermission, t]
  );

  if (!children) {
    return MenuChildren(props, false);
  }

  return (
    <Fragment>
      {children.some((x) => checkValidPermission(x.permission)) && (
        <Fragment>
          <ListItem
            button
            component="div"
            onClick={() => setOpen(!open)}
            classes={{ ...classesListItem }}
            className={clsx({
              [classes.parent]:
                open &&
                children?.some((x) => checkActivate(x.path, x.activePaths)),
            })}
          >
            <ListItemIcon classes={{ ...classesItemIconParent }}>
              <Icon />
            </ListItemIcon>
            <ListItemText classes={{ ...classesItemText }}>
              {t(label)}
            </ListItemText>
            {open ? <ExpandMore /> : <ExpandLess />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding className={classes.parentMenu}>
              {children &&
                children.map((item: IMenuItem) => MenuChildren(item, true))}
            </List>
          </Collapse>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MenuItem;

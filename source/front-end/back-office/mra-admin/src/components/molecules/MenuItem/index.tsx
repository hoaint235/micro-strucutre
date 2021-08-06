import { matchPath, NavLink, useLocation } from "react-router-dom";
import {
  useStyleListItem,
  useStyleItemIconParent,
  useStyleItemIconChildren,
  useStyleItemText,
  useStyles,
} from "./MenuItem.style";
import { useTranslation } from "react-i18next";
import { forwardRef, useCallback, useMemo, Fragment, useState } from "react";
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

const MenuItem = (props: MenuItemProps) => {
  const { label, path, exact, icon: Icon, children } = props;
  const [open, setOpen] = useState<boolean>(true);
  const { pathname } = useLocation();
  const classesListItem = useStyleListItem();
  const classesItemIconParent = useStyleItemIconParent();
  const classesItemIconChildren = useStyleItemIconChildren();
  const classesItemText = useStyleItemText();
  const classes = useStyles();
  const { t } = useTranslation();

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
    [path, exact, checkActivate, pathname]
  );

  if (!children) {
    return (
      <ListItem
        button
        path={path}
        component={MenuLink}
        onClick={() =>
          window.dispatchEvent(new CustomEvent(WindowEvents.CLOSE_MOBILE_MENU))
        }
        classes={{ ...classesListItem }}
      >
        <ListItemIcon classes={{ ...classesItemIconParent }}>
          <Icon />
        </ListItemIcon>
        <ListItemText classes={{ ...classesItemText }}>{t(label)}</ListItemText>
      </ListItem>
    );
  }

  return (
    <Fragment>
      <ListItem
        button
        component="div"
        onClick={() => setOpen(!open)}
        classes={{ ...classesListItem }}
        className={clsx({
          [classes.parent]:
            open && children?.some((x) => checkActivate(x.path, x.activePaths)),
        })}
      >
        <ListItemIcon classes={{ ...classesItemIconParent }}>
          <Icon />
        </ListItemIcon>
        <ListItemText classes={{ ...classesItemText }}>{t(label)}</ListItemText>
        {open ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className={classes.parentMenu}>
          {children &&
            children.map(({ path, label, ...restProps }: MenuItemProps) => (
              <ListItem
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent(WindowEvents.CLOSE_MOBILE_MENU)
                  )
                }
                id={`menu-${label}`}
                key={path}
                button
                path={path}
                component={MenuLink}
                classes={{ ...classesListItem }}
                style={{ paddingLeft: 48 }}
                {...restProps}
              >
                <ListItemIcon classes={{ ...classesItemIconChildren }}>
                  <FiberManualRecord className={classes.iconChildren} />
                </ListItemIcon>
                <ListItemText classes={{ ...classesItemText }}>
                  {t(label)}
                </ListItemText>
              </ListItem>
            ))}
        </List>
      </Collapse>
    </Fragment>
  );
};

export default MenuItem;

import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Fragment, useState, useCallback, useMemo, forwardRef } from "react";
import { FiberManualRecord, ExpandMore, ExpandLess } from "@material-ui/icons";
import {
  useStyleListItem,
  useStyleItemIconParent,
  useStyleItemIconChildren,
  useStyleItemText,
  useStyles,
} from "./ListChildren.style";
import clsx from "clsx";
import { useLocation, NavLink, matchPath } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { WindowEvents } from "../../../utils";

const ListChildren = (props: MenuItemProps) => {
  const { label, exact, icon: Icon, children } = props;
  const [open, setOpen] = useState<boolean>(false);
  const classesListItem = useStyleListItem();
  const classesItemIconParent = useStyleItemIconParent();
  const classesItemIconChildren = useStyleItemIconChildren();
  const classesItemText = useStyleItemText();
  const classes = useStyles();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const isMatch = (path: string) =>
    !!matchPath(pathname, { path: path, exact: true, strict: true });

  const checkActivate = useCallback(
    (path?: string, pathsActivate?: string[]) => {
      const active = pathsActivate
        ? pathsActivate.some((x: string) => isMatch(x))
        : isMatch(path || "");
      return active;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]
  );

  const MenuLink = useMemo(
    () =>
      forwardRef(
        ({ path, exact, pathsActivate, ...restProps }: any, ref: any) => (
          <NavLink
            ref={ref}
            to={path}
            exact={exact}
            isActive={() => checkActivate(path, pathsActivate)}
            activeClassName={classes.activeLink}
            {...restProps}
          />
        )
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exact, checkActivate, pathname]
  );

  return (
    <Fragment>
      <ListItem
        button
        component="div"
        onClick={() => setOpen(!open)}
        classes={{ ...classesListItem }}
        className={clsx({
          [classes.parent]:
            open &&
            children?.some((x) => checkActivate(x.path, x.pathsActivate)),
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

export default ListChildren;

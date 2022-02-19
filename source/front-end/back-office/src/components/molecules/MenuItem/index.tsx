import { matchPath, NavLink, useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { forwardRef, useCallback, useMemo, useState } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from '@material-ui/core';
import { FiberManualRecord, ExpandMore, ExpandLess } from '@material-ui/icons';
import clsx from 'clsx';
import { Pages, WindowEvents } from '@utils';
import {
  useStyleListItem,
  useStyleItemIconParent,
  useStyleItemIconChildren,
  useStyleItemText,
  useStyles,
} from './MenuItem.style';
import { IMenuItem, PermissionType } from '../../../models';
import { useStateSelector } from '../../../store';

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
  const { permissions } = useStateSelector((state) => state.appState);

  const checkValidPermission = useCallback(
    (permission?: PermissionType) =>
      permission && permissions.some((x) => x === permission),
    [permissions]
  );

  const isMatch = (path: string) =>
    !!matchPath(pathname, { path, exact: true, strict: true });

  const checkActivate = useCallback(
    (path?: string, activePaths?: string[]) => {
      const active = activePaths
        ? activePaths.some((x: string) => isMatch(x))
        : isMatch(path || '');
      return active;
    },
    [pathname]
  );

  const onCloseMobileMenu = (
    event: React.SyntheticEvent,
    path?: string,
    permission?: PermissionType
  ) => {
    event.preventDefault();
    history.push(path || Pages.DEFAULT, { permission });
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
    [MenuLink, checkValidPermission, t]
  );

  if (!children) {
    return MenuChildren(props, false);
  }

  return (
    <>
      {children.some((x) => checkValidPermission(x.permission)) && (
        <>
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
        </>
      )}
    </>
  );
};

export default MenuItem;

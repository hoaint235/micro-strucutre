import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core";
import React from "react";
import { t } from "@mra/utility";
import { NavLink } from "react-router-dom";

const useStyleListItem = makeStyles((theme: Theme) => ({
  selected: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    backgroundColor: "rgb(237, 231, 246)",
    "&:hover": {
      color: "rgb(237, 231, 246)",
    },
  },
  root: {
    borderRadius: 12,
    marginBottom: 5,
    paddingLeft: 23,
    fontWeight: 400,
    "&:hover": {
      backgroundColor: "rgb(237, 231, 246)",
      color: theme.palette.primary.main,
      "&> .mra-account-MuiListItemIcon-root": {
        color: theme.palette.primary.main,
      },
    },
  },
}));

const StyledListItemIcon = withStyles((theme: Theme) => ({
  root: {
    flexShrink: 0,
    display: "inline-flex",
    minWidth: 36,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}))(ListItemIcon);

const StyledListItemText = withStyles((theme: Theme) => ({
  root: {
    flex: "1 1 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
  },
}))(ListItemText);

type MenuItemProps = {
  label: string;
  icon: any;
  path?: string;
  exact?: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  activeLink: {
    backgroundColor: "rgb(237, 231, 246)",
    "& .mra-account-MuiTypography-root": {
      fontWeight: 700,
      color: theme.palette.primary.main,
    },
    "&> .mra-account-MuiListItemIcon-root": {
      color: theme.palette.primary.main,
    },
  },
}));

const MenuItem = ({ label, path, icon: Icon }: MenuItemProps) => {
  const classesListItem = useStyleListItem();
  const classes = useStyles();

  return (
    <ListItem
      button
      component={NavLink}
      classes={{ ...classesListItem }}
      to={path}
      activeClassName={classes.activeLink}
    >
      <StyledListItemIcon>
        <Icon />
      </StyledListItemIcon>
      <StyledListItemText>{t(label)}</StyledListItemText>
    </ListItem>
  );
};

export default MenuItem;

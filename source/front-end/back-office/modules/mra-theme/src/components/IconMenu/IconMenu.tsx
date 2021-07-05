import {
  Avatar,
  ClickAwayListener,
  fade,
  Grow,
  IconButton,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Theme,
} from "@material-ui/core";
import React, { Fragment, useState } from "react";

const useStyleIconButton = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

const useStyles = makeStyles((theme: Theme) => ({
  iconSecondary: {
    color: theme.palette.text.primary,
    backgroundColor: fade(theme.palette.text.primary, 0.2),
  },
  iconPrimary: {
    color: theme.palette.primary.main,
    backgroundColor: fade(theme.palette.primary.main, 0.2),
  },
  menuItem: {
    minHeight: theme.spacing(5),
  },
}));

const useStylesAvatar = makeStyles(() => ({
  root: {
    borderRadius: "30%",
  },
}));

type Props = {
  items: Array<any>;
  children?: any;
  color?: "primary" | "secondary";
  renderItem: (item) => any;
  onItemClick: (item) => void;
};

const IconMenu = (props: Props) => {
  const { items, children, renderItem, onItemClick, color = "primary" } = props;

  const [open, setOpen] = useState(false);
  const classesIconButton = useStyleIconButton();
  const anchorRef = React.useRef(null);
  const classes = useStyles();
  const classesAvatar = useStylesAvatar();

  const onToggle = () => {
    setOpen(!open);
  };

  const onClose = (item) => {
    setOpen(false);
    onItemClick(item);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  return (
    <Fragment>
      <IconButton
        classes={{ ...classesIconButton }}
        color="inherit"
        ref={anchorRef}
        size="small"
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={onToggle}
      >
        <Avatar
          className={
            color === "primary" ? classes.iconPrimary : classes.iconSecondary
          }
          classes={{ ...classesAvatar }}
        >
          {children}
        </Avatar>
      </IconButton>
      <Popper
        placement="bottom-end"
        style={{ zIndex: 99 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {items.map((item, index) => (
                    <MenuItem
                      className={classes.menuItem}
                      onClick={() => onClose(item)}
                      key={index}
                    >
                      {renderItem(item)}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );
};

export default IconMenu;

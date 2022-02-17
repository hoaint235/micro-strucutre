import {
  Avatar,
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@material-ui/core';
import React, { useState } from 'react';
import {
  useStyleIconButton,
  useStyles,
  useStylesAvatar,
} from './IconMenu.style';

export type IconMenuProps<TModel> = {
  items: Array<TModel>;
  children?: any;
  color?: 'primary' | 'secondary';
  renderItem: (item: TModel) => any;
  onItemClick: (item: TModel) => void;
};

const IconMenu = <TModel extends unknown>(props: IconMenuProps<TModel>) => {
  const { items, children, renderItem, onItemClick, color = 'primary' } = props;

  const [open, setOpen] = useState(false);
  const classesIconButton = useStyleIconButton();
  const anchorRef = React.useRef(null);
  const classes = useStyles();
  const classesAvatar = useStylesAvatar();

  const onToggle = () => {
    setOpen(!open);
  };

  const onClose = (item: GlobalProps) => {
    setOpen(false);
    onItemClick(item);
  };

  const handleListKeyDown = (event: GlobalProps) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  return (
    <>
      <IconButton
        classes={{ ...classesIconButton }}
        color="inherit"
        ref={anchorRef}
        size="small"
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={onToggle}
      >
        <Avatar
          className={
            color === 'primary' ? classes.iconPrimary : classes.iconSecondary
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
                placement === 'bottom' ? 'center top' : 'center bottom',
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
    </>
  );
};

export default IconMenu;

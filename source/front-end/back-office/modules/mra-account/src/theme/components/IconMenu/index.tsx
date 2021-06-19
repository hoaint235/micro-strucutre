import {
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import React, { Fragment, useState } from "react";

type Props = {
  items: Array<any>;
  children?: any;
  renderItem: (item) => any;
  onItemClick: (item) => void;
};

const IconMenu = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { items, children, renderItem, onItemClick } = props;
  const anchorRef = React.useRef(null);

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
        color="inherit"
        ref={anchorRef}
        size="small"
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={onToggle}
      >
        {children}
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
                      style={{ minHeight: 50 }}
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

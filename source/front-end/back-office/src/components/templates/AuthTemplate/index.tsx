import { Box, makeStyles, Theme } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';
import { useState, useCallback } from 'react';
import {
  ConfirmProvider,
  Header,
  LoadingProvider,
  Navbar,
  ToastProvider,
} from '@organisms';
import { useGuard, useMobile } from '@hooks';

const useStyles = (openMenu: boolean) =>
  makeStyles((theme: Theme) => ({
    root: {
      display: 'flex',
    },
    container: {
      backgroundColor: 'rgb(227, 242, 253)',
      flexGrow: 1,
      marginRight: 20,
      marginLeft: openMenu ? 0 : '-240px',
      minHeight: 'calc(100vh - 80px)',
      transition: 'margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
      borderRadius: 12,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginRight: 0,
        width: 'calc(100% - 260px)',
      },
    },
  }));

type Props = {
  children: React.ReactNode;
};

const AuthTemplate = (props: Props) => {
  const { children } = props;
  const [openDesktopMenu, setOpenDesktopMenu] = useState(true);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const classes = useStyles(openDesktopMenu)();
  const { isMobile } = useMobile();
  const { isAuth } = useGuard();

  const onToggleMenu = useCallback(() => {
    if (isMobile) {
      setOpenMobileMenu(!openMobileMenu);
    } else {
      setOpenDesktopMenu(!openDesktopMenu);
    }
  }, [isMobile, openDesktopMenu]);

  return (
    <>
      {isAuth && (
        <ConfirmProvider>
          <div className={classes.root}>
            <Header onToggle={onToggleMenu} />
            <Navbar
              openDesktop={openDesktopMenu}
              openMobile={openMobileMenu}
              onClose={() => setOpenMobileMenu(false)}
            />
            <Box component="div" mt={10} className={classes.container}>
              <Scrollbars
                autoHide
                autoHideTimeout={500}
                autoHideDuration={200}
                autoHeight
                autoHeightMin="calc(100vh - 80px)"
              >
                <Box component="div" p={3}>
                  {children}
                </Box>
              </Scrollbars>
            </Box>

            <LoadingProvider />
            <ToastProvider />
          </div>
        </ConfirmProvider>
      )}
    </>
  );
};

export default AuthTemplate;

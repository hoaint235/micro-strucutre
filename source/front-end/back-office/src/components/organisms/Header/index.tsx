import {
  AppBar,
  Box,
  Hidden,
  makeStyles,
  Theme,
  Toolbar,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { Logo } from '@atoms';
import { IconButton } from '@molecules';
import LanguageMenu from '../LanguageMenu';
import RoleMenu from '../RoleMenu';
import SettingMenu from '../SettingMenu';
import { Pages } from '@utils';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#fff',
    paddingTop: 8,
  },
  leftContainer: {
    display: 'flex',
    width: '228px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  logoContainer: {
    display: 'block',
    flexGrow: 1,
    WebkitBoxFlex: 1,
  },
  toggleMenu: {
    display: 'inline-flex',
    justifyContent: 'center',
  },
}));

const useStyleToolBar = makeStyles(() => ({
  root: {
    minHeight: 64,
  },
}));

type Props = {
  onToggle: () => void;
};

const Header = (props: Props) => {
  const { onToggle } = props;
  const classes = useStyles();
  const classToolBar = useStyleToolBar();
  const history = useHistory();

  const navigateDefaultPage = (event: React.SyntheticEvent) => {
    event.preventDefault();
    history.push(Pages.DEFAULT);
  };

  return (
    <AppBar position="fixed" elevation={0} className={classes.root}>
      <Toolbar classes={{ ...classToolBar }}>
        <div className={classes.leftContainer}>
          <Hidden smDown>
            <span className={classes.logoContainer}>
              <Logo
                href="/"
                onClick={navigateDefaultPage}
                src="/images/logo.svg"
                alt="logo"
              />
            </span>
          </Hidden>
          <IconButton.Primary
            className={classes.toggleMenu}
            onClick={onToggle}
            icon={Menu}
            name="toggleMenu"
          />
        </div>

        <div style={{ flexGrow: 1 }} />
        <div style={{ flexGrow: 1 }} />

        <Box mr={1}>
          <RoleMenu />
        </Box>
        <Box mr={1}>
          <LanguageMenu />
        </Box>
        <Box>
          <SettingMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import { Box, makeStyles, Theme } from "@material-ui/core";
import {
  Header,
  LoadingProvider,
  Navbar,
  ToastProvider,
} from "../../organisms";
import { Scrollbars } from "react-custom-scrollbars";
import { useState } from "react";

const useStyles = (openMenu: boolean) =>
  makeStyles((theme: Theme) => ({
    root: {
      display: "flex",
    },
    container: {
      backgroundColor: "rgb(227, 242, 253)",
      flexGrow: 1,
      marginRight: 20,
      marginLeft: openMenu ? 0 : "-240px",
      minHeight: "calc(100vh - 80px)",
      transition: "margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
      borderRadius: 12,
      [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
        marginRight: 0,
        width: "calc(100% - 260px)",
      },
    },
  }));

type Props = {
  children: JSX.Element;
};

const AuthTemplate = (props: Props) => {
  const { children } = props;
  const [openMenu, setOpenMenu] = useState(true);
  const classes = useStyles(openMenu)();

  const onToggleMenu = () => {
    setOpenMenu(!openMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  return (
    <div className={classes.root}>
      <Header onToggle={onToggleMenu} />
      <Navbar isOpen={openMenu} onClose={() => setOpenMenu(false)} />
      <Box component="div" mt={10} className={classes.container}>
        <Scrollbars
          autoHide
          autoHideTimeout={500}
          autoHideDuration={200}
          autoHeight={true}
          autoHeightMin={`calc(100vh - 80px)`}
        >
          <Box component="div" p={3}>
            {children}
          </Box>
        </Scrollbars>
      </Box>

      <LoadingProvider />
      <ToastProvider />
    </div>
  );
};

export default AuthTemplate;

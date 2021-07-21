import { Fragment, useEffect, useMemo, useState } from "react";
import {
  Backdrop,
  CircularProgress,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { WindowEvents } from "../../../utils/constants";

const useStyles = makeStyles((theme: Theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 99,
    color: "#fff",
  },
}));

const LoadingProvider = () => {
  const classes = useStyles();
  const [countLoading, setCountLoading] = useState(0);

  const decreaseLoading = () => {
    setCountLoading(countLoading - 1);
  };

  const increaseLoading = () => {
    setCountLoading(countLoading + 1);
  };

  useEffect(() => {
    window.addEventListener(WindowEvents.INCREASE_LOADING, increaseLoading);
    window.addEventListener(WindowEvents.DECREASE_LOADING, decreaseLoading);

    return () => {
      window.removeEventListener(
        WindowEvents.INCREASE_LOADING,
        increaseLoading
      );
      window.removeEventListener(
        WindowEvents.DECREASE_LOADING,
        decreaseLoading
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderLoading = useMemo(
    () => (
      <Backdrop className={classes.backdrop} open={countLoading > 0}>
        <CircularProgress color="inherit" />
      </Backdrop>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [countLoading]
  );

  return <Fragment>{renderLoading}</Fragment>;
};

export default LoadingProvider;

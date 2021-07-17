import React, {
  Fragment,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import {
  Backdrop,
  CircularProgress,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { WindowEvents } from "../../utils";

const useStyles = makeStyles((theme: Theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 99,
    color: "#fff",
  },
}));

const LoadingProvider = () => {
  const classes = useStyles();
  const [countLoading, setCountLoading] = useState(0);

  const decreaseLoading = useCallback(() => {
    setCountLoading(countLoading - 1);
  }, [countLoading]);

  const increaseLoading = useCallback(() => {
    setCountLoading(countLoading - 1);
  }, [countLoading]);

  useEffect(() => {
    window.addEventListener(WindowEvents.DECREASE_LOADING, decreaseLoading);
    return window.removeEventListener(
      WindowEvents.DECREASE_LOADING,
      decreaseLoading
    );
  }, [decreaseLoading]);

  useEffect(() => {
    window.addEventListener(WindowEvents.INCREASE_LOADING, increaseLoading);
    return window.removeEventListener(
      WindowEvents.INCREASE_LOADING,
      increaseLoading
    );
  }, [increaseLoading]);

  const renderLoading = useMemo(
    () => (
      <Backdrop className={classes.backdrop} open={countLoading > 0}>
        <CircularProgress color="inherit" />
      </Backdrop>
    ),
    [countLoading]
  );

  return <Fragment>{renderLoading}</Fragment>;
};

export default LoadingProvider;

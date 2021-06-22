import React, { Fragment, useEffect, useMemo, useState } from "react";
import { WindowEvent } from "../../utils/constants";
import {
  Backdrop,
  CircularProgress,
  makeStyles,
  Theme,
} from "@material-ui/core";

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
    window.addEventListener(WindowEvent.INCREASE_LOADING, increaseLoading);
    window.addEventListener(WindowEvent.DECREASE_LOADING, decreaseLoading);

    return () => {
      window.removeEventListener(WindowEvent.INCREASE_LOADING, increaseLoading);
      window.removeEventListener(WindowEvent.DECREASE_LOADING, decreaseLoading);
    };
  }, []);

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

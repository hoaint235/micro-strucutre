import {
  Backdrop,
  CircularProgress,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 99,
    color: "#fff",
  },
}));

const Loading = ({ loading }) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;

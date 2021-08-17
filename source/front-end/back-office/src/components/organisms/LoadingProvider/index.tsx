import { Fragment, useMemo } from 'react';
import {
  Backdrop,
  CircularProgress,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { useStateSelector } from '../../../store';

const useStyles = makeStyles((theme: Theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 999,
    color: '#fff',
  },
}));

const LoadingProvider = () => {
  const classes = useStyles();
  const { countLoading } = useStateSelector((state) => state.appState);

  const renderLoading = useMemo(
    () => (
      <Backdrop className={classes.backdrop} open={countLoading > 0}>
        <CircularProgress color="inherit" />
      </Backdrop>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [countLoading]
  );

  return <>{renderLoading}</>;
};

export default LoadingProvider;

import { CircularProgress, makeStyles } from "@material-ui/core";
import { Suspense } from "react";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    textAlign: "center",
  },
});

type Props = {
  children: React.ReactNode;
};

const SuspenseLoading = (props: Props) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <Suspense fallback={<CircularProgress className={classes.root} />}>
      {children}
    </Suspense>
  );
};

export default SuspenseLoading;

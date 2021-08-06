import { Card, CardContent, CardHeader, Paper } from "@material-ui/core";
import { useEffect } from "react";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useGuard } from "../../../hooks";
import { Typography } from "../../atoms";
import {
  useStyleCardHeader,
  useStylePaper,
  useStyles,
} from "./MainContainer.style";

type Props = {
  title: string;
  children?: any;
  action?: any;
};

const MainContainer = (props: Props) => {
  const { title, children, action } = props;
  const classesPaper = useStylePaper();
  const classesCardHeader = useStyleCardHeader();
  const classes = useStyles();
  const { isAuth } = useGuard();
  const history = useHistory();

  const onRouteChange = (route: any) => {
    console.log(route);
  };

  useEffect(() => {
    const route = history.listen(onRouteChange);

    return () => route();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {isAuth && (
        <Fragment>
          <Paper component={Card} classes={{ ...classesPaper }} elevation={0}>
            <CardHeader
              classes={{ ...classesCardHeader }}
              subheader={<Typography.Subtitle label={title} />}
              action={action}
            ></CardHeader>
          </Paper>
          <Paper component={Card} classes={{ ...classesPaper }}>
            <CardContent className={classes.content}>{children}</CardContent>
          </Paper>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MainContainer;

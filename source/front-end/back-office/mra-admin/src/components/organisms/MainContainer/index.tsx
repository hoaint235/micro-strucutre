import { Card, CardContent, CardHeader, Paper } from "@material-ui/core";
import { Fragment } from "react";
import { Typography } from "../../atoms";
import { useStyleCardHeader, useStylePaper } from "./MainContainer.type";

type Props = {
  title: string;
  children?: any;
  action?: any;
};

const MainContainer = (props: Props) => {
  const classesPaper = useStylePaper();
  const classesCardHeader = useStyleCardHeader();
  const { title, children, action } = props;

  return (
    <Fragment>
      <Paper
        component={Card}
        classes={{ ...classesPaper }}
        elevation={0}
        style={{ marginBottom: 24, padding: 0 }}
      >
        <CardHeader
          classes={{ ...classesCardHeader }}
          subheader={<Typography.Subtitle label={title} />}
          action={action}
        ></CardHeader>
      </Paper>
      <Paper
        component={Card}
        classes={{ ...classesPaper }}
        style={{ padding: 0 }}
      >
        <CardContent style={{ padding: 24 }}>{children}</CardContent>
      </Paper>
    </Fragment>
  );
};

export default MainContainer;

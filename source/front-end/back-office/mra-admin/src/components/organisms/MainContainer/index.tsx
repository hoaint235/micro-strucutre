import { Card, CardContent, CardHeader, Paper } from "@material-ui/core";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const { isAuth } = useGuard();
  return (
    <Fragment>
      {isAuth && (
        <Fragment>
          <Paper component={Card} classes={{ ...classesPaper }} elevation={0}>
            <CardHeader
              classes={{ ...classesCardHeader }}
              subheader={<Typography.Subtitle label={t(title)} />}
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

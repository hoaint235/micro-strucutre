import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";

const useStylePaper = makeStyles((theme: Theme) => ({
  rounded: {
    borderRadius: 12,
  },
}));

const useStyleCardHeader = makeStyles((theme: Theme) => ({
  action: {
    marginTop: 0,
    marginRight: 0,
  },
}));

type Props = {
  title: string;
  children?: any;
  action?: any;
};

const MainContainer = (props: Props) => {
  const { t } = useTranslation();
  const classesPaper = useStylePaper();
  const classesCardHeader = useStyleCardHeader();
  const { title, children, action } = props;

  return (
    <Paper component={Card} classes={{ ...classesPaper }}>
      <CardHeader
        classes={{ ...classesCardHeader }}
        title={t(title)}
        action={action}
      ></CardHeader>
      <CardContent>{children}</CardContent>
    </Paper>
  );
};

export default MainContainer;

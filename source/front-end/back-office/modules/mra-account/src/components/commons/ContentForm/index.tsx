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
import { t } from "@mra/utility";

const useStylePaper = makeStyles((theme: Theme) => ({
  rounded: {
    borderRadius: 12,
  },
}));

type Props = {
  title: string;
  children?: any;
  action?: any;
};

const ContentForm = (props: Props) => {
  const classesPaper = useStylePaper();
  const { title, children, action } = props;

  return (
    <Paper component={Card} classes={{ ...classesPaper }}>
      <CardHeader title={t(title)} action={action}></CardHeader>
      <Divider />
      <CardContent>{children}</CardContent>
    </Paper>
  );
};

export default ContentForm;

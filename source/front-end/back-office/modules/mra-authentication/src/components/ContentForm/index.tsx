import { Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import ErrorProvider from "../ErrorProvider";
import Header from "../Header";

type Props = {
  title: string;
  children?: React.ReactNode | React.FunctionComponent;
};

const ContentForm = (props: Props) => {
  const { children, title } = props;

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item xs={12}>
          <ErrorProvider />
          <Fragment>{children}</Fragment>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ContentForm;

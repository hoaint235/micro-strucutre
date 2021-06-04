import { Grid } from "@material-ui/core";
import React, { Fragment, useMemo } from "react";
import HeaderForm from "../Header";

type Props = {
  title: string;
  children?: React.ReactNode | React.FunctionComponent;
};

const ContentForm = (props: Props) => {
  const { children, title } = props;

  const renderContent = useMemo(
    () => (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeaderForm title={title} />
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    ),
    [title]
  );

  return <Fragment>{renderContent}</Fragment>;
};

export default ContentForm;

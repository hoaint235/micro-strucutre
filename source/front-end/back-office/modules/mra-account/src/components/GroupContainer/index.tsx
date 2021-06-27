import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
  },
}));

interface Props {
  title: string;
  children: React.ReactNode;
}

const GroupContainer = (props: Props) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { title, children } = props;
  return (
    <div>
      <Typography component="p" variant="subtitle2" className={classes.title}>
        {t(title)}
      </Typography>
      <Box mt={1}>{children}</Box>
    </div>
  );
};

export default GroupContainer;

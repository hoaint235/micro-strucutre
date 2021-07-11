import { Box, makeStyles, MTypography } from "@mra/theme";
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
      <MTypography.Subtitle className={classes.title} label={t(title)} />
      <Box mt={1}>{children}</Box>
    </div>
  );
};

export default GroupContainer;

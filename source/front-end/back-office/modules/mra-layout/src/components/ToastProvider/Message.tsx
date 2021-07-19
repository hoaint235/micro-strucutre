import { Grid, makeStyles, Theme, MTypography } from "@mra/theme";
import { Close } from "@material-ui/icons";
import React from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
  btnClose: {
    width: 20,
    height: 20,
    border: "none",
    display: "flex",
    color: "white",
    background: "transparent",
    cursor: "pointer",
  },
  icon: {
    width: 20,
    height: 20,
  },
  message: {
    color: theme.palette.background.paper,
  },
}));

type Props = {
  message: string;
  onClose: () => void;
};

const Message = (props: Props) => {
  const { message, onClose } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={10}>
        <MTypography.Label label={t(message)} className={classes.message} />
      </Grid>
      <Grid item xs={2}>
        <button className={classes.btnClose} onClick={onClose}>
          <Close className={classes.icon} />
        </button>
      </Grid>
    </Grid>
  );
};

export default Message;

import { Collapse, IconButton, makeStyles } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { useTranslation } from "react-i18next";

const useAlertStyles = makeStyles({
  root: {
    borderRadius: 12,
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
});

type Props = {
  message: string;
  onClose: () => void;
};

const ErrorMessage = (props: Props) => {
  const { message, onClose } = props;
  const classesAlert = useAlertStyles();
  const { t } = useTranslation();

  return (
    <Collapse in={!!message}>
      <Alert
        classes={{ ...classesAlert }}
        color="error"
        severity="error"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClose}
          >
            <Close fontSize="inherit" />
          </IconButton>
        }
      >
        {t(message)}
      </Alert>
    </Collapse>
  );
};

export default ErrorMessage;

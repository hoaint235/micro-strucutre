import { makeStyles, Theme } from "@material-ui/core";

const useStylePaper = makeStyles((theme: Theme) => ({
  root: {
    padding: 0,
    marginBottom: theme.spacing(3),
  },
  rounded: {
    borderRadius: 12,
    boxShadow: "none",
    border: "1px solid rgba(144, 202, 249, 0.46)",
  },
}));

const useStyleCardHeader = makeStyles(() => ({
  action: {
    marginTop: 0,
    marginRight: 0,
  },
  title: {
    fontWeight: 500,
  },
  root: {
    padding: 12,
    paddingLeft: 24,
    paddingRight: 24,
    height: 32,
  },
}));

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    padding: theme.spacing(3),
  },
}));

export { useStyleCardHeader, useStylePaper, useStyles };

import { makeStyles } from "@material-ui/core";

const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 12,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${theme.palette.primary.main} 0 0 0 1px`,
      borderColor: theme.palette.primary.main,
    },
  },
  error: {
    borderColor: theme.palette.error.main,
  },
  focused: {
    "&$error": {
      boxShadow: "none",
      borderColor: theme.palette.error.main,
    },
  },
}));

export default useStylesReddit;

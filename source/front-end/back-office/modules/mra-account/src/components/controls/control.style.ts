import { makeStyles, fade } from "@material-ui/core";

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
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  error: {
    borderColor: theme.palette.error.main,
  },
  focused: {
    "&$error": {
      borderColor: theme.palette.error.main,
    },
  },
}));

export default useStylesReddit;

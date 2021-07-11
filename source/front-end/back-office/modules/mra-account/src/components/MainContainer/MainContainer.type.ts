import { makeStyles } from "@mra/theme";

const useStylePaper = makeStyles(() => ({
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

export { useStyleCardHeader, useStylePaper };

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    backgroundColor: "rgb(227, 242, 253)",
    height: "100%",
    minHeight: "100vh",
    width: "100%",
    maxWidth: "calc(100% + 16px)",
  },
  contentContainer: {
    maxWidth: 475,
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(97, 97, 97)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow: "none",
    backgroundImage: "none",
    borderRadius: 12,
    overflow: "hidden",
    border: "1px solid rgba(144, 202, 249, 0.46)",
    padding: 40,
  },
  justifyContent: {
    display: "flex",
    justifyContent: "center",
  },
  backgroundContainer: {
    position: "relative",
    margin: 0,
    boxSizing: "border-box",
    alignSelf: "stretch",
  },
}));

export default useStyles;

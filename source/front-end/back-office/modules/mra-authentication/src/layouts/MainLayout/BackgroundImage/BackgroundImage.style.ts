import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "rgb(255, 255, 255)",
    backgroundImage:
      "url(https://berrydashboard.io/static/media/auth-pattern.d80b0e94.svg)",
    position: "absolute",
    backgroundPosition: "0px 0px",
    overflow: "hidden",
    margin: "0px 0px 0px auto",
    inset: "0px",
  },
  container: {
    boxSizing: "border-box",
    display: "flex",
    flexFlow: "column wrap",
    width: "100%",
    margin: "0px",
    justifyContent: "flex-end",
    WebkitBoxPack: "end",
  },
  imageContainer: {
    maxWidth: "none",
    boxSizing: "border-box",
    margin: 0,
    display: "flex",
    justifyContent: "center",
  },
  image: {
    top: "20%",
    width: "280px",
    height: "350px",
    position: "absolute",
    animation: "15s wings ease-in-out infinite",
    backgroundSize: "380px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  contentContainer: {
    overflow: "hidden",
    position: "relative",
    textAlign: "center",
    paddingBottom: "50px",
  },
}));

export default useStyles;

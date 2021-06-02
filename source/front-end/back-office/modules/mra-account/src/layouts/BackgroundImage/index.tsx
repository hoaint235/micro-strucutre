import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";

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
  imageContainer: {
    maxWidth: "none",
    boxSizing: "border-box",
    margin: 0,
  },
  backgroundImage: {
    "&::after": {
      content: " ",
      top: "32%",
      left: "40%",
      width: "313px",
      height: "280px",
      position: "absolute",
      animation: "15s wings ease-in-out infinite",
      backgroundSize: "380px",
      backgroundImage:
        "url(https://berrydashboard.io/static/media/auth-purple-card.9933988c.svg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    "&::before": {
      content: " ",
      top: "23%",
      left: "37%",
      width: "243px",
      height: "210px",
      position: "absolute",
      animation: "15s wings ease-in-out infinite",
      animationDelay: "1s",
      backgroundSize: "380px",
      backgroundImage:
        "url(https://berrydashboard.io/static/media/auth-blue-card.df6aea12.svg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  },
}));

const BackgroundImage = () => {
  const classes = useStyles();

  return (
    <Box component="span" className={classes.root}>
      <Grid container>
        <Grid item className={classes.imageContainer}>
          <span></span>
          <span className={classes.backgroundImage}></span>
        </Grid>
        <Grid item className={classes.imageContainer}></Grid>
      </Grid>
    </Box>
  );
};

export default BackgroundImage;

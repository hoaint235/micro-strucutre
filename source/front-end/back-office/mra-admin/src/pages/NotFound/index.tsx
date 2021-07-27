import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { Button, Typography } from "../../components";
import { useHistory } from "react-router-dom";
import { Config } from "../../configurations";
import { Home } from "@material-ui/icons";
import mergeClass from "clsx";

const useCardMedia = makeStyles({
  root: {
    display: "block",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100%",
    objectFit: "cover",
  },
});

const useStyles = makeStyles({
  root: {
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    width: "calc(100% + 24px)",
    marginTop: "-24px",
    marginLeft: "-24px",
    WebkitBoxPack: "center",
    justifyContent: "center",
  },
  item: {
    paddingTop: "12px !important",
    paddingLeft: "24px !important",
  },
  imgContainer: {
    margin: "0 auto",
    position: "relative",
    maxWidth: 600,
  },
  image: {
    top: 0,
    left: 0,
    width: "100%",
    position: "absolute",
  },
  textContent: {
    margin: "0 auto",
    maxWidth: 350,
    textAlign: "center",
  },
});

const useImageStyles = makeStyles(() => ({
  image: {
    top: 0,
    left: 0,
    width: "100%",
    position: "absolute",
  },
}));

type ImageProps = {
  src: string;
  defaultClass?: boolean;
};

const Image = (props: ImageProps) => {
  const { src, defaultClass = true } = props;
  const classesCardMedia = useCardMedia();
  const classes = useImageStyles();

  return (
    <CardMedia
      component="img"
      className={mergeClass({
        [classes.image]: defaultClass,
      })}
      image={src}
      classes={{ ...classesCardMedia }}
    />
  );
};

const NotFound = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Paper elevation={0} component={Card} className={classes.root}>
      <CardContent>
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12}>
            <div className={classes.imgContainer}>
              <Image src="/images/404/bg.svg" defaultClass={false} />
              <Image src="/images/404/text.svg" />
              <Image src="/images/404/blue.svg" />
              <Image src="/images/404/purple.svg" />
            </div>
          </Grid>
          <Grid item xs={12} className={classes.textContent}>
            <Grid container spacing={2} className={classes.container}>
              <Grid item className={classes.item}>
                <Typography.Label
                  label="Something is wrong"
                  color="textPrimary"
                />
              </Grid>
              <Grid item className={classes.item}>
                <Typography.Label
                  label="The page you are looking was moved, removed, renamed, or might never exist!"
                  color="textPrimary"
                />
              </Grid>
              <Grid item className={classes.item}>
                <Button.Primary
                  name="home"
                  label="Home"
                  onClick={() => history.push(Config.defaultPath)}
                  startIcon={<Home />}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Paper>
  );
};

export default NotFound;

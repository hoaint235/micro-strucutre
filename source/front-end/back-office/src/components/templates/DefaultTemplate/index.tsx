import {
  Card,
  CardContent,
  Container,
  Grid,
  Hidden,
  Paper,
} from '@material-ui/core';
import { BackgroundImage, LoadingProvider } from '../../organisms';
import useStyles from './DefaultTemplate.style';

type Props = {
  children: JSX.Element;
};

const DefaultTemplate = (props: Props) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item lg={7} md={6} sm={12} className={classes.justifyContent}>
          <Container maxWidth="md" className={classes.justifyContent}>
            <Paper component={Card} className={classes.contentContainer}>
              <CardContent>{children}</CardContent>
            </Paper>
          </Container>
        </Grid>
        <Hidden smDown>
          <Grid item lg={5} md={6} className={classes.backgroundContainer}>
            <BackgroundImage />
          </Grid>
        </Hidden>
      </Grid>

      <LoadingProvider />
    </div>
  );
};

export default DefaultTemplate;

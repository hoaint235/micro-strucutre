import { Card, CardContent, Grid, Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Home } from '@material-ui/icons';
import { Button, Typography, Image } from '@components';
import { useStyles } from './NotFound.style';
import { Pages } from '@utils';

const NotFound = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Paper elevation={0} component={Card} className={classes.root}>
      <CardContent>
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12}>
            <div className={classes.imgContainer}>
              <Image src="/images/404/bg.svg" />
              <Image src="/images/404/text.svg" className={classes.image} />
              <Image src="/images/404/blue.svg" className={classes.image} />
              <Image src="/images/404/purple.svg" className={classes.image} />
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
                  onClick={() => history.push(Pages.MAIN)}
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

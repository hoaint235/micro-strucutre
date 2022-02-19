import { Box, Grid, makeStyles, Theme } from '@material-ui/core';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import ErrorProvider from '../ErrorProvider';
import { Logo, Typography } from '@atoms';
import { Pages } from '@utils';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: 1.2,
    color: theme.palette.primary.main,
  },
  logo: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

type Props = {
  title: string;
  children?: React.ReactNode | React.FunctionComponent;
};

const DefaultContainer = (props: Props) => {
  const { children, title } = props;
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();

  const handleLogoClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    history.push(Pages.DEFAULT);
  };

  const Header = useMemo(
    () => (
      <Grid container alignItems="center">
        <Grid item sm={7} xs={12}>
          <Typography.Subtitle className={classes.header} label={t(title)} />
        </Grid>
        <Grid item sm={5} xs={12} className={classes.logo}>
          <Logo href="#" src="images/logo.svg" onClick={handleLogoClick} />
        </Grid>
      </Grid>
    ),
    [title, t]
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box mb={2}>{Header}</Box>
      </Grid>
      <Grid item xs={12}>
        <ErrorProvider />
        {children}
      </Grid>
    </Grid>
  );
};

export default DefaultContainer;

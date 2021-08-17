import { Grid, makeStyles, Theme } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import times from 'lodash/times';
import { MenuItem } from '../../molecules';
import { Menus } from '../../../configurations';
import { IMenuItem } from '../../../models';
import { useStateSelector } from '../../../store';

const MenuListSkeleton = () => {
  const children = () => (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        {times(10, (index: number) => (
          <Grid item xs={12} key={`children-${index}`}>
            <Skeleton variant="rect" height={25} animation="wave" />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );

  return (
    <Grid container spacing={2}>
      {children()}
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    alignItems: 'flex-start',
    height: 'calc(100vh - 83px)',
    display: 'block',
  },
}));

const MenuList = () => {
  const classes = useStyles();
  const { permissions } = useStateSelector((state) => state.appState);

  return (
    <div className={classes.container}>
      {permissions.length > 0 ? (
        Menus.map((menu: IMenuItem, index: number) => (
          <MenuItem key={index} {...menu} />
        ))
      ) : (
        <MenuListSkeleton />
      )}
    </div>
  );
};

export default MenuList;

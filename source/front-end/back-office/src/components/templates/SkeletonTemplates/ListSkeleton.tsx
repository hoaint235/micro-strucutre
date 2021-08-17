import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import times from 'lodash/times';

const ListSkeleton = () => {
  const children = (index: number) => (
    <Grid item xs={12} key={`header-${index}`}>
      <Grid container spacing={2}>
        {times(6, (index: number) => (
          <Grid item xs={2} key={`body-${index}`}>
            <Skeleton variant="rect" height={15} animation="wave" />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Skeleton variant="rect" height={15} animation="wave" />
      </Grid>
      <Grid item xs={6}>
        <Skeleton variant="rect" height={15} animation="wave" />
      </Grid>
      <Grid item xs={12}>
        <Box mt={5}>
          <Grid container spacing={2}>
            {times(6, (index: number) => children(index))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ListSkeleton;

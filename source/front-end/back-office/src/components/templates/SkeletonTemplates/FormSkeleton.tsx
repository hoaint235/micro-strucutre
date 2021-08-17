import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import times from 'lodash/times';

const FormSkeleton = () => {
  const children = (index: number) => (
    <Grid item xs={12} sm={6} key={`parent-${index}`}>
      <Grid container spacing={2}>
        {times(5, (index: number) => (
          <Grid item xs={12} key={`children-${index}`}>
            <Skeleton variant="rect" height={25} animation="wave" />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );

  return (
    <Grid container spacing={2}>
      {times(2, (index: number) => children(index))}
    </Grid>
  );
};

export default FormSkeleton;

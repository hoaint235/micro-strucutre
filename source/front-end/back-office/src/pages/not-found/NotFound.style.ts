import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    width: 'calc(100% + 24px)',
    marginTop: '-24px',
    marginLeft: '-24px',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
  },
  item: {
    paddingTop: '12px !important',
    paddingLeft: '24px !important',
  },
  imgContainer: {
    margin: '0 auto',
    position: 'relative',
    maxWidth: 600,
  },
  image: {
    top: 0,
    left: 0,
    width: '100%',
    position: 'absolute',
  },
  textContent: {
    margin: '0 auto',
    maxWidth: 350,
    textAlign: 'center',
  },
});

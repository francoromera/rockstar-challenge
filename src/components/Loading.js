import React from 'react';
import { makeStyles, CircularProgress, Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;

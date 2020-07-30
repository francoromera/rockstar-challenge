import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    cursor: 'pointer',
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>RockstarCoders</Typography>
  );
};

export default Logo;

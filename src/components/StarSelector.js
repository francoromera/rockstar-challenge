import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(.3),
  },
  icon: {
    cursor: 'pointer',
  },
}));

const StarSelector = ({
  value = null,
  onChange,
}) => {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
      {Array(5).fill().map((item, index) => {
        const current = value !== null && value === index + 1;
        const selected = value !== null && value >= index + 1;
        if (selected) {
          return (
            <StarIcon
              key={index}
              className={classes.icon}
              onClick={() => current ? onChange(null) : onChange(index + 1)}
            />
          );
        }
        return (
          <StarBorderIcon
            key={index}
            className={classes.icon}
            onClick={() => onChange(index + 1)}
          />
        );
      })}
    </Box>
  );
};

export default StarSelector;

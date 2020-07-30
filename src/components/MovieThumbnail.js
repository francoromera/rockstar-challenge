import React from 'react';
import { Box, makeStyles, CardMedia } from '@material-ui/core';
import _ from 'lodash';

import { getImagePath } from '../services/helpers';

const useStyles = makeStyles(() => ({
  root: {
    cursor: 'pointer',
  },
}));

const MovieThumbnail = ({
  movie,
  onClick,
}) => {
  const classes = useStyles();
  const title = _.get(movie, 'title');
  const path = _.get(movie, 'poster_path');

  return (
    <Box className={classes.root} onClick={onClick}>
      <CardMedia
        component="img"
        alt={title}
        image={path ? getImagePath(path, 500) : null}
        title={title}
      />
    </Box>
  );
};

export default MovieThumbnail;

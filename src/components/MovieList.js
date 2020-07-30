import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import MovieThumbnail from './MovieThumbnail';
import Loading from './Loading';

const useStyles = makeStyles(() => ({
  item: {
    transition: 'opacity',
    transitionDuration: '0.3s',
  },
  hidden: {
    transition: 'opacity',
    transitionDuration: '0.6s',
    opacity: 0.2,
  },
}));

const MovieList = ({
  loading,
  list,
  filter,
}) => {
  const classes = useStyles();
  const movies = list || [];
  const history = useHistory();

  const handleClick = (movie) => {
    history.push(`/movie/${movie.id}`);
  };

  return (
    <Container maxWidth="md">
      {loading ? (
        <Loading />
      ) : (
        <Grid container spacing={2}>
          {movies.length === 0 && (
            <Typography variant="body1">No results</Typography>
          )}
          {movies.map((movie) => {
            const hidden = filter && !filter(movie);
            return (
              <Grid item xs={12} sm={3} key={movie.id} className={hidden ? classes.hidden : classes.item}>
                <MovieThumbnail movie={movie} onClick={() => handleClick(movie)} />
              </Grid>
            );
          })}    
        </Grid>
      )}
    </Container>
  );
};

export default MovieList;

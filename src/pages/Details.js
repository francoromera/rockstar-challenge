import React, { useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import Header from '../components/Header';
import MovieDetails from '../components/MovieDetails';
import { action } from '../services/helpers';
import { selectMovie } from '../selectors';
import { useParams } from 'react-router-dom';

function Details() {
  const dispatch = useDispatch();
  const { loading, result } = useSelector(selectMovie);
  const { id } = useParams();

  useEffect(() => {
    dispatch(action('FETCH_GET_MOVIE', id));
  }, [dispatch, id]);

  return (
    <Box>
      <Header>
        <Typography variant="h3">
          {_.get(result, 'title', '')}
        </Typography>
      </Header>
      <MovieDetails loading={loading} movie={result} />
    </Box>
  );
}

export default Details;

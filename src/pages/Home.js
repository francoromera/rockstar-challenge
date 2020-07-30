import React, { useEffect, useCallback, useMemo } from 'react';
import { Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import MovieList from '../components/MovieList';
import { action } from '../services/helpers';
import { selectDiscoverMovies, selectSearchMovies } from '../selectors';
import SearchInput from '../components/SearchInput';

function Home() {
  const dispatch = useDispatch();
  const discoverMovies = useSelector(selectDiscoverMovies);
  const searchMovies = useSelector(selectSearchMovies);
  const showSearch = !!searchMovies.query;
  const loading = showSearch ? searchMovies.loading : discoverMovies.loading;
  const results = showSearch ? searchMovies.results : discoverMovies.results;

  useEffect(() => {
    dispatch(action('FETCH_DISCOVER_MOVIES'));
  }, [dispatch]);

  const handleSearch = useCallback((value) => {
    dispatch(action('FETCH_SEARCH_MOVIES', value));
  }, [dispatch]);

  const handleStars = useCallback((value) => {
    dispatch(action('SET_STARS_FILTER', value));
  }, [dispatch]);

  const filter = useMemo(() => {
    return showSearch
      ? (item) => {
        if (searchMovies.stars) {
          const limit = searchMovies.stars * 2;
          return item.vote_average <= limit && item.vote_average >= limit - 2;
        }
        return true;
      }
      : null;
  }, [showSearch, searchMovies.stars]);

  return (
    <Box>
      <Header>
        <SearchInput
          initialValue={searchMovies.query}
          onSearch={handleSearch}
          stars={searchMovies.stars}
          onStars={showSearch ? handleStars : null}
        />
      </Header>
      <MovieList loading={loading} list={results} filter={filter} />
    </Box>
  );
}

export default Home;

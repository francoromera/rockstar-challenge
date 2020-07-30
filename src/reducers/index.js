import { combineReducers } from 'redux';

import discoverMovies from './discoverMovies';
import searchMovies from './searchMovies';
import movie from './movie';

export default combineReducers({
  discoverMovies,
  searchMovies,
  movie,
});

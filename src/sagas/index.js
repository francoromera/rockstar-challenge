import { all } from 'redux-saga/effects';

import searchMovies from './searchMovies';
import discoverMovies from './discoverMovies';
import getMovie from './getMovie';

export default function* rootSaga() {
  yield all([
    discoverMovies(),
    searchMovies(),
    getMovie(),
  ]);
}

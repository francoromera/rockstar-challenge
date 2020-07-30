import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../services/api';
import { action } from '../services/helpers';

function* fetchSearchMovies({ payload: query }) {
  const parsedQuery = query.replace(/[^-_.a-zA-Z0-9]/, '');
  if (parsedQuery) {
    yield put(action(`FETCH_SEARCH_MOVIES_REQUEST`, parsedQuery));
    try {
      const result = yield call(api.searchMovies, parsedQuery);
      yield put(action(`FETCH_SEARCH_MOVIES_SUCCESS`, result));
    } catch (e) {
      yield put(action(`FETCH_SEARCH_MOVIES_FAILURE`, e));
    }
  } else {
    yield put(action(`FETCH_SEARCH_MOVIES_RESET`));
  }
}

export default function* searchMovies() {
  yield takeLatest('FETCH_SEARCH_MOVIES', fetchSearchMovies);
}

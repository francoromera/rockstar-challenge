import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../services/api';
import { action } from '../services/helpers';

function* fetchDiscoverMovies() {
  yield put(action(`FETCH_DISCOVER_MOVIES_REQUEST`));
  try {
    const result = yield call(api.discoverMovies);
    yield put(action(`FETCH_DISCOVER_MOVIES_SUCCESS`, result));
  } catch (e) {
    yield put(action(`FETCH_DISCOVER_MOVIES_FAILURE`, e));
  }
}

export default function* discoverMovies() {
  yield takeLatest('FETCH_DISCOVER_MOVIES', fetchDiscoverMovies);
}

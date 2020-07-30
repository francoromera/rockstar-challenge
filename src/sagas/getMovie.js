import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../services/api';
import { action } from '../services/helpers';

function* fetchMovie({ payload: id }) {
  yield put(action(`FETCH_GET_MOVIE_REQUEST`, id));
  try {
    const result = yield call(api.getMovie, id);
    yield put(action(`FETCH_GET_MOVIE_SUCCESS`, result));
  } catch (e) {
    yield put(action(`FETCH_GET_MOVIE_FAILURE`, e));
  }
}

export default function* getMovie() {
  yield takeLatest('FETCH_GET_MOVIE', fetchMovie);
}

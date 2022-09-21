import { all } from 'redux-saga/effects';
import pokemonSaga from './Pokemon/sagas';

export default function* rootSaga() {
  yield all([
    pokemonSaga(),
  ]);
}

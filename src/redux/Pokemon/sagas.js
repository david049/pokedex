import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  loadCurrentPokemonSuccess,
  loadCurrentPokemonFailure,
  loadCurrentSetSuccess,
  loadCurrentSetFailure,
} from './actions';
import {
  LOAD_SET,
  LOAD_POKEMON,
} from './constants';
const pokeApi = 'https://pokeapi.co/api/v2/pokemon/';

function* loadSet({ type, payload }) {
  try {
    const response = yield call(axios.get(pokeApi+payload.index));
    yield put(loadCurrentSetSuccess((response.data)));
    console.log(response.data);
  } catch (err) {
    yield put(loadCurrentSetFailure(err));
  }
}

function* loadPokemon({ type, payload }) {
  try {
    const response = yield call(axios.get(pokeApi+payload.name));
    yield put(loadCurrentPokemonSuccess((response.data)));
    console.log(response.data);
  } catch (err) {
    yield put(loadCurrentPokemonFailure(err));
  }
}

function* pokemonSaga() {
  yield takeEvery(LOAD_SET, loadSet);
  yield takeEvery(LOAD_POKEMON, loadPokemon);
}

export default pokemonSaga;

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
const POKEMONPERPAGE = 21;

const pokeApi = 'https://pokeapi.co/api/v2/pokemon';

function* loadSet({ type, payload }) {
  try {
    const pokemon = [];
    // unfortunately pokeapi doesn't allow one large call
    for (let i = payload.index; i < payload.index+POKEMONPERPAGE; i+=1) {
      const response = yield call(axios, { method: 'GET', url:
      pokeApi+'/'+i },
      );
      pokemon.push(response.data);
    }
    yield put(loadCurrentSetSuccess(pokemon));
  } catch (err) {
    yield put(loadCurrentSetFailure(err));
  }
}

function* loadPokemon({ type, payload }) {
  try {
    const response = yield call(axios,
      { method: 'GET', url: pokeApi+'/'+payload });
    yield put(loadCurrentPokemonSuccess((response.data)));
  } catch (err) {
    yield put(loadCurrentPokemonFailure(err));
  }
}

function* pokemonSaga() {
  yield takeEvery(LOAD_SET, loadSet);
  yield takeEvery(LOAD_POKEMON, loadPokemon);
}

export default pokemonSaga;

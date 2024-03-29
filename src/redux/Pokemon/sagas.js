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
  API_LINK,
} from './constants';
import { POKEMON_PER_PAGE } from '../../constants';


function* loadSet({ type, payload }) {
  try {
    const pokemon = [];
    // unfortunately pokeapi doesn't allow one large call
    for (let i = payload.index; i < payload.index+POKEMON_PER_PAGE; i+=1) {
      const response = yield call(axios, { method: 'GET', url:
      `${API_LINK}/${i}` },
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
      { method: 'GET', url: `${API_LINK}'/'${payload}` });
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

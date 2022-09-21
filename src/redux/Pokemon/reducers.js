import {
  LOAD_POKEMON,
  LOAD_POKEMON_SUCCESS,
  LOAD_POKEMON_FAILURE,
  LOAD_SET,
  LOAD_SET_SUCCESS,
  LOAD_SET_FAILURE } from './constants';

const INITIAL_STATE = {
  pokedex: {
    index: 0,
    isLoading: false,
    set: [],
    hasError: false,
  },
  currentPokemon: {
    name: '',
    isLoading: false,
    hasError: false,
    pokemon: null,
  },
};

export const pokemonReducer = (state=INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case LOAD_POKEMON:
    return setLoadPokemon(state);
  case LOAD_POKEMON_SUCCESS:
    return setLoadPokemonSuccess(state, payload);
  case LOAD_POKEMON_FAILURE:
    return setLoadPokemonFailure(state, payload);
  case LOAD_SET:
    return setLoadSet(state);
  case LOAD_SET_SUCCESS:
    return setLoadSetSuccess(state, payload);
  case LOAD_SET_FAILURE:
    return setLoadSetFailure(state, payload);
  default:
    return state;
  }
};

const setLoadPokemon = (state) => ({
  ...state,
  currentPokemon: {
    name: '',
    isLoading: true,
    hasError: false,
  },
});

const setLoadPokemonSuccess = (state, payload) => ({
  ...state,
  currentPokemon: {
    name: '',
    isLoading: false,
    hasError: false,
    pokemon: payload,
  },
});

const setLoadPokemonFailure = (state, payload) => ({
  ...state,
  currentPokemon: {
    name: '',
    isLoading: false,
    hasError: true,
    pokemon: payload,
  },
});

const setLoadSet = (state) => ({
  ...state,
  pokedex: {
    isLoading: true,
    hasError: false,
    set: [],
  },
});

const setLoadSetSuccess = (state, payload) => ({
  ...state,
  pokedex: {
    isLoading: false,
    hasError: false,
    set: payload.data,
  },
});

const setLoadSetFailure = (state, payload) => {
  return (
    {
      ...state,
      pokedex: {
        isLoading: false,
        hasError: true,
        set: null,
      },
    });
};


export default pokemonReducer;

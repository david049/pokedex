import {
  LOAD_POKEMON,
  LOAD_POKEMON_SUCCESS,
  LOAD_POKEMON_FAILURE, // THESE ARE HERE FOR FUTURE UPDATE, MAYBE MODAL...
  LOAD_SET,
  LOAD_SET_SUCCESS,
  LOAD_SET_FAILURE } from './constants';

export const loadCurrentPokemon = (payload) => {
  return {
    type: LOAD_POKEMON,
    payload,
  };
};
export const loadCurrentPokemonSuccess = (payload) => {
  return {
    type: LOAD_POKEMON_SUCCESS,
    payload,
  };
};
export const loadCurrentPokemonFailure = (payload) => {
  return {
    type: LOAD_POKEMON_FAILURE,
    payload,
  };
};

export const loadCurrentSet = (payload) => {
  return {
    type: LOAD_SET,
    payload: payload,
  };
};
export const loadCurrentSetSuccess = (payload) => {
  return {
    type: LOAD_SET_SUCCESS,
    payload: payload,
  };
};
export const loadCurrentSetFailure = (payload) => {
  return {
    type: LOAD_SET_FAILURE,
    payload: payload,
  };
};



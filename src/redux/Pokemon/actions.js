import {
  LOAD_POKEMON,
  LOAD_POKEMON_SUCCESS,
  LOAD_POKEMON_FAILURE,
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
  // console.log(payload);
  return {
    type: LOAD_SET,
    payload: payload,
  };
};
export const loadCurrentSetSuccess = (payload) => {
  console.log(payload);
  return {
    type: LOAD_SET_SUCCESS,
    payload: payload,
  };
};
export const loadCurrentSetFailure = (payload) => {
  console.log('bad error');
  console.log(payload);
  return {
    type: LOAD_SET_FAILURE,
    payload: payload,
  };
};



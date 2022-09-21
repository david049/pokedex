import { createSelector } from 'reselect';

const getCurrentPokemon = (state) => state.currentPokemon;
const getCurrentSet = (state) => state.pokedex;

const getCurrentPokemonData =
    createSelector(getCurrentPokemon,
      (currentState) => currentState && currentState.pokemon);
const getCurrentSetData =
    createSelector(getCurrentPokemon,
      (currentState) => currentState && currentState.set);
const getCurrentPokemonLoading =
    createSelector(getCurrentPokemon,
      (currentState) => currentState && currentState.isLoading);
const getCurrentSetLoading =
    createSelector(getCurrentSet, (currentState) => currentState &&
    currentState.isLoading);
const getCurrentPokemonError =
    createSelector(getCurrentPokemon, (currentState) =>
      currentState && currentState.hasError);
const getCurrentSetError =
    createSelector(getCurrentSet, (currentState) =>
      currentState && currentState.hasError);

export {
  getCurrentPokemonData,
  getCurrentSetData,
  getCurrentPokemonLoading,
  getCurrentSetLoading,
  getCurrentPokemonError,
  getCurrentSetError,
};

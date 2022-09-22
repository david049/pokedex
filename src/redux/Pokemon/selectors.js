import { createSelector } from 'reselect';

const getCurrentPokemon = (state) => state.pokemon.currentPokemon;
const getCurrentSet = (state) => state.pokemon.pokedex;

const getCurrentPokemonData =
    createSelector(getCurrentPokemon,
      (currentState) => currentState && currentState.pokemon);
const getCurrentSetData =
    createSelector(getCurrentSet,
      (currentState) => {
        return currentState && currentState.set;
      });
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

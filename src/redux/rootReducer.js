import { combineReducers } from 'redux';
import pokemonReducer from './Pokemon/reducers';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export default rootReducer;

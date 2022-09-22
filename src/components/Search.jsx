import React, { useState } from 'react';
import Pokemon from './Pokemon';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurrentPokemon,
  clearCurrentPokemon } from '../redux/Pokemon/actions';
import { getCurrentPokemonData,
  getCurrentPokemonError,
  getCurrentPokemonLoading } from '../redux/Pokemon/selectors';
const SearchInput = styled.input`
    width: 300px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Search = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const pokemon = useSelector(getCurrentPokemonData);
  const loading = useSelector(getCurrentPokemonLoading);
  const error = useSelector(getCurrentPokemonError);
  const change = (change) => {
    setText(change);
    if (pokemon || error) {
      dispatch(clearCurrentPokemon());
    }
  };
  return (
    <Container>
      <h1>Pokédex</h1>
      <form onSubmit={(e)=>{
        e.preventDefault();
        dispatch(loadCurrentPokemon(text));
      }}>
        <SearchContainer>
          <SearchInput type="text" placeholder='Pokemon Name'
            onChange={(event) => (change(event.target.value))} />
          <button>Search</button>
        </SearchContainer>
      </form>
      {pokemon && <Pokemon pokemonDetails={pokemon} /> }
      {loading && <h2>Loading...</h2>}
      {error && <h2>ERROR FINDING POKEMON</h2>}
    </Container>
  );
};

export default Search;

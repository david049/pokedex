import React from 'react';
import Pokemon from './Pokemon';
import { useState } from 'react';
import styled from 'styled-components';


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
  const request = 'https://pokeapi.co/api/v2/pokemon/';
  const [text, setText] = useState('');
  const [showPokemon, setShowPokemon] = useState(false);
  const change = (change) => {
    setShowPokemon(false);
    setText(change);
  };
  return (
    <Container>
      <h1>Pokédex</h1>
      <form onSubmit={(e)=>{
        e.preventDefault();
        setShowPokemon(true);
      }}>
        <SearchContainer>
          <SearchInput type="text" placeholder='Pokemon Name'
            onChange={(event) => (change(event.target.value))} />
          <button>Search</button>
        </SearchContainer>
      </form>
      {showPokemon && <Pokemon url={request+text.toLowerCase()} /> }
    </Container>
  );
};

export default Search;

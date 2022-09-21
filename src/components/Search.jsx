import React from 'react';
import Pokemon from './Pokemon';
import { useState } from 'react';
import styled from 'styled-components';

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 300px;
    margin: auto;
`;

const SearchInput = styled.input`
    width: 300px;
`;
const Search = () => {
  const [text, setText] = useState('');
  const change = (change) => {
    setText(change);
  };
  return (
    <SearchBar>
      <h1>Pokedex</h1>
      <div>
        <SearchInput type="text" placeholder='Pokemon Name'
          onChange={(event) => (change(event.target.value))} />
        {!!text && <Pokemon idn={text.toLowerCase()} /> }
      </div>
    </SearchBar>
  );
};

export default Search;

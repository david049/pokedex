import React from 'react';
import Pokemon from './Pokemon';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1236px;
    margin: auto;
`;

const PokemonList = ({ pokemon, loading }) => {
  return (
    <Container>
      {loading ? <h1>LOADING</h1> :
        (pokemon?.map((pokemon) => (
          <Pokemon pokemonDetails={ pokemon }
            key={pokemon?.name+pokemon?.weight} />
        )))}
    </Container>
  );
};

PokemonList.propTypes = {
  pokemon: PropTypes.array,
  loading: PropTypes.bool,
};

export default PokemonList;

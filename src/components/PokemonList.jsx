import React from 'react';
import Pokemon from './Pokemon';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const PokemonList = ({ pokemon, loading }) => {
  return (
    <Container>
      {!loading &&
      (pokemon?.map((pokemon) => (
        <Pokemon url={pokemon?.url} key={pokemon?.name} />
      )))}
    </Container>
  );
};

PokemonList.propTypes = {
  pokemon: PropTypes.array,
  loading: PropTypes.bool,
};

export default PokemonList;

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

const PokemonList = ({ initial }) => {
  const pokemon = [];
  for (let i = 0; i < 20; i++) {
    pokemon[i] = initial + i + 1;
  }
  return (
    <Container className="container">
      {pokemon.map((id) => (
        <Pokemon idn={id} key={id} />
      ))}
    </Container>
  );
};

PokemonList.propTypes = {
  initial: PropTypes.number,
};

export default PokemonList;

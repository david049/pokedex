import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PokemonTypeColors = {
  normal: 'A8A77A',
  fire: 'EE8130',
  water: '6390F0',
  electric: 'F7D02C',
  grass: '7AC74C',
  ice: '96D9D6',
  fighting: 'C22E28',
  poison: 'A33EA1',
  ground: 'E2BF65',
  flying: 'A98FF3',
  psychic: 'F95587',
  bug: 'A6B91A',
  rock: 'B6A136',
  ghost: '735797',
  dragon: '6F35FC',
  dark: '705746',
  steel: 'B7B7CE',
  fairy: 'D685AD',
};

const PokemonImage = styled.img`
    border: 1px solid black;
    background-color: white;
    width: 200px;
    height: 200px;
`;

const PokemonInfo = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    background-image: radial-gradient(white, red);
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    padding-top: 20px;
    text-align: center;
    margin: 10px 10px 10px 0;
`;

const Type = styled.div`
  background-color: #${(props) => PokemonTypeColors[props.color]};
  margin-right: 5px;
  padding: 10px;
  border-radius: 15px;
  outline: 1px solid black;
`;

const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
  align-items: center;
  justify-content: center;
`;

const NumberContainer = styled.div`
  opacity: 0.75;
  background-color: black;
  margin: -10px;
  color: white;
  width: fit-content;
  padding: 3px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Pokemon = ({ pokemonDetails }) => {
  const { name, id, sprites, types, weight, height } = pokemonDetails;
  if (!name) {
    return null;
  }

  const image = (sprites) => {
    if (!!sprites.other.dream_world.front_default) {
      return sprites.other.dream_world.front_default;
    }
    if (!!sprites.other['official-artwork'].front_default) {
      return sprites.other['official-artwork'].front_default;
    }
    return sprites.front_default;
  };
  return (
    <PokemonInfo>
      {!name ? 'loading...' :
        <>
          <PokemonImage src={image(sprites)}
            alt="could not find" />
          <InfoContainer>
            <NumberContainer> #{id}</NumberContainer>
            <h3>{name}</h3>
            <TypeContainer>
              <Type color={types[0].type.name}>
                {types[0].type.name}</Type>
              {!types[1] ? null: <Type
                color={types[1].type.name}>
                {types[1].type.name}</Type> }
            </TypeContainer>
            <p>Weight: {weight/10}kg</p>
            <p>Height: {height*10}cm</p>
          </InfoContainer>
        </>
      }
    </PokemonInfo>
  );
};
// name, sprites, id, type, weight, height
Pokemon.propTypes = {
  pokemonDetails: PropTypes.object,
};

export default Pokemon;

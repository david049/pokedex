import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
const Pokemon = ({ idn }) => {
  const request = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokemon, setPokemon] = useState(null);
  const [loading, setload] = useState(true);
  const [errored, setErrored] = useState(false);
  useEffect(() => {
    axios.get(request+idn).then((res) => {
      setPokemon(res.data);
      setErrored(false);
    }).catch((err) => {
      console.log(err);
      setErrored(true);
      setPokemon(null);
    });
  }, [idn]);
  useEffect(() => {
    if (pokemon !== null && 'name' in pokemon) {
      setload(false);
    }
  }, [pokemon]);
  if (!pokemon) {
    return null;
  }
  return (
    <PokemonInfo>
      {loading ? 'loading...' :
        <>
          <PokemonImage src={pokemon.sprites.other.dream_world.front_default}
            alt="could not find" />
          <div className='info'>
            <h3>{pokemon.name}</h3>
            <p>{pokemon.types[0].type.name}
              {!pokemon.types[1] ? '': ' '+pokemon.types[1].type.name }</p>
            <p>Weight: {pokemon.weight/10}kg</p>
            <p>Height: {pokemon.height*10}cm</p>
          </div>
        </>
      }
      {errored ? <><br/>Could not find pokemon</> : ''}
    </PokemonInfo>
  );
};

Pokemon.propTypes = {
  idn: PropTypes.string,
};

export default Pokemon;

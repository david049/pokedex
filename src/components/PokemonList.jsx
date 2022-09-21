import React from 'react';
import Pokemon from './Pokemon';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  getCurrentSetLoading,
  getCurrentSetData, getCurrentSetError } from '../redux/Pokemon/selectors';
import { loadCurrentSet } from '../redux/Pokemon/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffectOnce } from 'react-use';
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const PokemonList = ({ initial }) => {
  const dispatch = useDispatch();
  const set = useSelector(getCurrentSetData);
  const loading = useSelector(getCurrentSetLoading);
  const err = useSelector(getCurrentSetError);
  console.log(set);
  console.log(loading);
  console.log(err);
  const pokemon = [];
  for (let i = 0; i < 20; i++) {
    pokemon[i] = initial + i + 1;
  }
  useEffectOnce(()=>{
    dispatch(loadCurrentSet({ index: 0 }));
  });
  return (
    <Container className="container">
      {pokemon.map((id) => (
        <Pokemon idn={id} key={id} />
      ))}
      {err}
    </Container>
  );
};

PokemonList.propTypes = {
  initial: PropTypes.number,
};

export default PokemonList;

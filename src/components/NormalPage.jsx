import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import styled from 'styled-components';
import {
  getCurrentSetLoading,
  getCurrentSetData } from '../redux/Pokemon/selectors';
import { loadCurrentSet } from '../redux/Pokemon/actions';
import { useSelector, useDispatch } from 'react-redux';
import { POKEMON_PER_PAGE } from '../constants';

const Button = styled.button`
    width: 150px;
    height: 50px;
    margin: 20px;
    background-image: radial-gradient(white, red);
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
`;

const IndexInputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;

const IndexInput = styled.input`
  width: 80px;
`;

const NormalPage = () => {
  const dispatch = useDispatch();
  const [num, setNum] = useState(1);
  const [indexSearch, setIndexSearch] = useState(1);
  const pokemon = useSelector(getCurrentSetData);
  const loading = useSelector(getCurrentSetLoading);
  useEffect(()=>{
    dispatch(loadCurrentSet({ index: num }));
  }, [num]);
  return (
    <>
      <ButtonContainer className='buttons'>
        <Button onClick={() => {
          if (num >= POKEMON_PER_PAGE) {
            setNum(num - POKEMON_PER_PAGE);
          } else {
            setNum(1);
          };
        }}>Back</Button>
        <Button onClick={() => {
          setNum(num + POKEMON_PER_PAGE);
        }}>Next</Button>
      </ButtonContainer>
      <form onSubmit={(e)=>{
        if (Number(indexSearch) > 0) {
          setNum(Number(indexSearch));
        }
        e.preventDefault();
      }}>
        <IndexInputContainer>
          <IndexInput type="number" placeholder='Skip to'
            onChange={(event) => (setIndexSearch(event.target.value))}/>
          <button>Skip</button>
        </IndexInputContainer>
      </form>
      <PokemonList pokemon={pokemon} loading={loading}/>
    </>
  );
};

export default NormalPage;

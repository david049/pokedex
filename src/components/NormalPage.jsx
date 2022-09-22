import React from 'react';
import PokemonList from './PokemonList';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  getCurrentSetLoading,
  getCurrentSetData } from '../redux/Pokemon/selectors';
import { loadCurrentSet } from '../redux/Pokemon/actions';
import { useSelector, useDispatch } from 'react-redux';

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
          if (num >= 20) {
            setNum(num - 20);
          };
        }}>Back</Button>
        <Button onClick={() => {
          setNum(num + 20);
        }}>Next</Button>
      </ButtonContainer>
      <form onSubmit={(e)=>{
        setNum(Number(indexSearch));
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

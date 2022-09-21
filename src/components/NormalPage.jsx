import React from 'react';
import PokemonList from './PokemonList';
import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 200px;
    height: 50px;
    margin: 20px;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const NormalPage = () => {
  const [num, setNum] = useState(0);
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
      <PokemonList initial={num} />
    </>
  );
};

export default NormalPage;

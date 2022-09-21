import React from 'react'
import Pokemon from './Pokemon';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const PokemonList = ({ initial }) => {
    let pokemon = []
    for (let i = 0; i < 20; i++) {
        pokemon[i] = initial + i + 1;
    }
    return (
            <Container className="container">
                {pokemon.map((id) => (
                    <Pokemon idn={id} key={id} />
                ))}
            </Container>
    )
}

export default PokemonList

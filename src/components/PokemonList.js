import React from 'react'
import Pokemon from './Pokemon';

const PokemonList = ({ initial }) => {
    let pokemon = []
    for (let i = 0; i < 20; i++) {
        pokemon[i] = initial + i + 1;
    }
    return (
            <div className="container">
                {pokemon.map((id) => (
                    <Pokemon idn={id} key={id} />
                ))}
            </div>
    )
}

export default PokemonList

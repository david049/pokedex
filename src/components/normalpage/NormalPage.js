import React from 'react'
import PokemonList from '../pokemonlist/PokemonList';
import { useState } from 'react';
import './NormalPage.css'
const NormalPage = () => {
    const [num, setNum] = useState(0);
    return (
        <>
            <div className='buttons'>
                <button onClick={() => {
                    if (num >= 20)
                        setNum(num - 20)
                }}>Back</button>
                <button onClick={() => {
                    setNum(num + 20)
                }}>Next</button>
            </div>
            <PokemonList initial={num} />
        </>
    )
}

export default NormalPage

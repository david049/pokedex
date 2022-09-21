import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import styled from 'styled-components'
import './Pokemon.css'
//taking from pokemon api

const PokemonImage = styled.img`
    border: 1px solid black;
    background-color: white;
    width: 200px;
    height: 200px;
`

const PokemonWithSearch = () => {
    const request = "https://pokeapi.co/api/v2/pokemon/"
    const [pokemon, setPokemon] = useState(null)
    const [loading, setload] = useState(true)
    const [errored, setErrored] = useState(false)
    const [text, setText] = useState("c")
    useEffect(() => {
        let cancel = false;
        if (text === "") {
            setText("C")
        }
        axios.get(request+text.toLowerCase()).then((res) => {
        if (cancel) {
            setload(true)
            return
        }
        setPokemon(res.data)
        setload(false)
        setErrored(false)
        
    }).catch((err) => {
        setErrored(true)
    })
    return () => {
        cancel = true
    }
    },[text])
    
    return (
        <div className='pokemon'>
        <input type="text" onChange={(event) => (setText(event.target.value))}></input>
        {(loading || typeof(pokemon.name !== undefined) ) ? "loading..." : 
        <>  
            <PokemonImage src={pokemon.sprites.other.dream_world.front_default} alt="could not find" />
            <div className='info'>
             <h3>{pokemon.name}</h3>
             <p>{pokemon.types[0].type.name}
             {!pokemon.types[1] ? "": " "+pokemon.types[1].type.name }</p>
             <p>Weight: {pokemon.weight/10}kg</p>
             <p>Height: {pokemon.height*10}cm</p>
            </div>
        </>
        }
        {errored ? <><br/>Could not find pokemon</> : ""}
        </div>
    )
}

export default PokemonWithSearch

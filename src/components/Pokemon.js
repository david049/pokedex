import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
//taking from pokemon api
const Pokemon = ({ idn }) => {
    const request = "https://pokeapi.co/api/v2/pokemon/"
    const [pokemon, setPokemon] = useState(null)
    const [loading, setload] = useState(true)
    const [errored, setErrored] = useState(false)
    useEffect(() => {
        axios.get(request+idn).then((res) => {
        setPokemon(res.data)
        setload(false)
    }).catch((err) => {
        console.log(err)
        setErrored(true)
    })
    },[])
    return (
        <div className='pokemon'>
        {loading ? "loading..." : 
        <>
            <img src={pokemon.sprites.other.dream_world.front_default} alt="could not find" />
            <div className='info'>
             <h3>Name: {pokemon.name}</h3>
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

export default Pokemon

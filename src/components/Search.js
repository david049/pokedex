import React from 'react'
import Pokemon from './Pokemon'
import { useState } from 'react'
const Search = () => {

    return (
        <div className='search'>
            <h1>Pokedex</h1>
            <input type="text"  placeholder='Pokemon Name'/>
        </div>
    )
}

export default Search

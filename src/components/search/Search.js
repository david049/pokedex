import React from 'react'
import Pokemon from '../Pokemon/Pokemon'
import { useState } from 'react'
import './Search.css'
const Search = () => {
    const [text, setText] = useState("")
    const change = (change) => {
        setText(change)
    }
    return (
        <div className='search'>
            <h1>Pokedex</h1>
                <div>
                    <input type="text" placeholder='Pokemon Name' onChange={(event) => (change(event.target.value))} />
                    {!!text && <Pokemon idn={text.toLowerCase()} /> }
                </div>
        </div>
    )
}

export default Search

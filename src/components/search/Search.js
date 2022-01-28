import React from 'react'
import Pokemon from '../pokemon/Pokemon'
import { useState } from 'react'
import './Search.css'
const Search = () => {
    const [text, setText] = useState("")
    const [clicked, setClicked] = useState(false)
    const onClick = () => {
        setClicked(!clicked)
    }
    const change = (change) => {
        setText(change)
    }
    return (
        <div className='search'>
            <h1>Pokedex</h1>
            {clicked ?
                <div>
                    <button onClick={onClick}>Search New Pokemon!</button>
                    <Pokemon idn={text.toLowerCase()} />
                </div> :
                <div>
                    <input type="text" placeholder='Pokemon Name' onChange={(event) => (change(event.target.value))} />
                    <button onClick={onClick}>Search</button>
                </div>}
        </div>
    )
}

export default Search

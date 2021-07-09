import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import s from "./Search.module.css"
import { useHistory } from 'react-router-dom';

export default function Search() {
    const name = useSelector(state => state.pokemons)
    const { push } = useHistory()
    const [search, setSearch] = useState("")

    const handleChange =(e)=>{
        setSearch(e.target.value)
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
       const result =  name[0].find(e=> e.name === search)
       result ? push(`/Home/data/${result.id}`) : push(`/Home/data/error`) 
    }


    return (
        <div className={s.container} >
            <input autoComplete="off" type="text" name="search" placeholder={"Busca tu pokemon"} className={s.Input} onChange={handleChange}/>
            {
                name[0] ? <button className={s.Button} onClick={name ? handleSubmit : false} type="submit">Buscar</button > : <button className={s.Button}>Buscar</button>
            }
        </div>
    )
}

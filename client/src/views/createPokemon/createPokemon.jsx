import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getPokemons } from '../../actions/actions';
import { GET_POKEMONS } from '../../Utils/const';
import s from "./createPokemon.module.css"
/* import { useDispatch, useSelector } from 'react-redux' */

export function CreatePokemon(){
    const  dispatch = useDispatch()
    const{ push }= useHistory() 
    const [type, setType] = useState([])
    const [input, setInput] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        sprite: "",
        type: []
    });

    function handleChange(e){
        setInput(values=>({
            ...values,
            [e.target.name]: e.target.value
        }))
    }
    function handleChangeType(e) {
        setType(values => ([
            ...values,
            e.target.value
        ]))
        setInput(values=>({
            ...values,
            [e.target.name]: [...type, e.target.value]
        }))
        console.log(e.target.value)
    }
    function resetType(e){
        setType([])
        setInput(values=>({
            ...values,
            [e.target.name]: []
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(GET_POKEMONS, input)
        .then(res =>{
            dispatch(getPokemons)
            push(`/Home/data/${res.data.id}`)
        })

    }

    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit} className={s.Form}>
                <div className={s.containerInput}>
                    <label htmlFor="Name">Name:</label>
                    <div > 
                        <input onChange={handleChange} type="text" name="name" className={s.Inputs} autoComplete="off" required/>
                    </div>
                </div>
                <div className={s.containerInput}>
                    <label htmlFor="HP">HP:</label>
                    <div>
                        <input onChange={handleChange} type="number" name="hp" className={s.Inputs} />
                    </div>
                </div >
                <div className={s.containerInput}>
                    <label htmlFor="Attack">Attack:</label>
                    <div>
                        <input onChange={handleChange} type="number" name="attack" className={s.Inputs}/>
                    </div>
                </div>
                <div className={s.containerInput}>
                    <label htmlFor="Defense">Defense:</label>
                    <div>
                        <input onChange={handleChange} type="number" name="defense" className={s.Inputs}/>
                    </div>
                </div>
                <div className={s.containerInput}>
                    <label htmlFor="Speed">Speed:</label>
                    <div>
                        <input onChange={handleChange} type="number" name="speed" className={s.Inputs} />
                    </div>
                </div>
                <div className={s.containerInput}>
                    <label htmlFor="height">Height:</label>
                    <div>
                        <input onChange={handleChange} type="number" name="height" className={s.Inputs}/>
                    </div>
                </div>
                <div className={s.containerInput}>
                    <label htmlFor="weight">weight:</label>
                    <div>
                        <input onChange={handleChange} type="number" name="weight" className={s.Inputs}/>
                    </div>
                </div>
                <div className={s.containerInput}>
                    <label htmlFor="sprite">Sprite:</label>
                    <div>
                        <input onChange={handleChange} type="text" name="sprite" className={s.Inputs} />
                    </div>
                </div>
                <div>
                <button onClick={resetType} name="type">Resetear</button>
                    <label htmlFor="type">Type:  </label>
                    {input.type.length > 2?
                    <p>solo podes elegir dos tipos de pokemons</p>:<>
                <select name="type" onChange={handleChangeType}>
                        <option value={1} name="Normal" /* id={1} */>Normal</option>
                        <option value={2} name="Fighting" >Fighting</option>
                        <option value={3} name="Flying">Flying</option>
                        <option value={4} name="Poison">Poison</option>
                        <option value={5} name="Ground">Ground</option>
                        <option value={6} name="Rock">Rock</option>
                        <option value={7} name="Bug">Bug</option>
                        <option value={8} name="Ghost">Ghost</option>
                        <option value={9} name="Steel">Steel</option>
                        <option value={10} name="Fire">Fire</option>
                        <option value={11} name="Water">Water</option>
                        <option value={12} name="Grass">Grass</option>
                        <option value={13} name="Electric">Electric</option>
                        <option value={14} name="Psychic">Psychic</option>
                        <option value={15} name="Ice">Ice</option>
                        <option value={16} name="Dragon">Dragon</option>
                        <option value={17} name="Dark">Dark</option>
                        <option value={18} name="Fairy">Fairy</option>
                        <option value={19} name="Unknown">Unknown</option>
                        <option value={20} name="Shadow">Shadow</option>
                    </select>
                    </>

                    }
                </div>
                <button>Agregar Pokemon</button> 
            </form>
        </div>
    )
}

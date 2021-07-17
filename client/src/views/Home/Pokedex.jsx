import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getDisplay, getPokemons, getPokemonsAPI, getPokemonsDB, getType} from "../../actions/actions"
import { Filter } from "../../components/filter/Filter"
import { Pokemons } from "../../components/Pokemons/Pokemons"
import j from "./Pokedex.module.css"


const Pokedex = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.totalpokemons)
    if(state.length !== 0){
        var index = state[0].slice(0, 12)
        dispatch(getDisplay([index])) 
    }




    useEffect(()=>{
        dispatch(getPokemonsAPI())
        dispatch(getPokemons())
        dispatch(getPokemonsDB())
        dispatch(getType())
    }, [dispatch])


    return (
        <div className={j.BODY}>
            {state && state.lenght === 0?
            <div>CARGANDO...</div>:<>
                <div className={j.Pagination}>
                    <h1 className={
                        j.pokedex
                    }>Pikadex</h1>
                    <div>
                        {
                            state.lenght === 0 ?
                                <div>cargando</div> :
                                <Filter />
                        }
                    </div>
                </div>   
                    <Pokemons />   
            </>
            }
                
        </div>
    )
}

export default Pokedex;
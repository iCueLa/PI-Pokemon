import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterAz, getPokemons } from "../../actions/actions"
import Card from "../../components/Cards/Card"
import Pagination from "../../components/Paginado/Pagination"
import j from "./Home.module.css"
/* import Pokemon from "./Pokemon" */

const Pokedex = () => {
    const pokemon = useSelector(state => state.pokemons)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])
    const filtroOne =()=>{
        return filterAz()
    }


    return (
        <div className={j.BODY}>
            <div className={j.Pagination}>
                <h1 className={
                    j.pokedex
                }>Pokedex</h1>
                <Pagination 
                     page={1}
                    totalPage={10}
                     onLeftClick={console.log("anda")}
                        onRightClick={console.log("anda2")}
                />
                <div>
                    <label >Filtros: </label>
                    <select>
                        <option onClick={filtroOne}>A-Z</option>
                    </select>
                </div>
            </div>
                <div className={j.PokedexGrid}>
                    { pokemon.length ===0 ?
                    (<><div className={j.Loading}>
                    <img src="https://i.pinimg.com/originals/4d/f0/38/4df03842be46631dc8b4f1b313638161.gif"  alt="" className={j.IMAGEN}/>
                    </div>
                    </>
                    ):
                        pokemon[0].map((e)=>{
                            return <Card key={e.name}
                                name={e.name}
                                id={e.id}
                                img={e.sprite}
                                type={e.types}
                            />
                            
                        })
                    }
                </div>
        </div>
    )
}

export default Pokedex;
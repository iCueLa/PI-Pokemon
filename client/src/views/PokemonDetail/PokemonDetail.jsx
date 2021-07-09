import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clearPage, getdata } from '../../actions/actions'
import { Link } from 'react-router-dom'
import s from "./PokemonDetail.module.css"

export const PokemonDetail = () => {
    const pokemon = useSelector(state => state.data)
    const  dispatch = useDispatch()
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getdata(id));
        return ()=>dispatch(clearPage())
    },[id,dispatch])

    /* console.log(pokemon.sprite) */
    return (
        <div className={s.BODY}>
            {
                pokemon?<>
                <div className={s.container} key={pokemon.id}>
                    <div className={s.panel}>
                        <div className={s.Top}>
                                <h1 className={s.Title}>{pokemon.name}</h1>
                            <div className={s.containerIMG}>
                                <img src={pokemon.sprite} className={s.pokemonImg}/* width="150" height="100" */ alt="" />
                            </div>
                        </div>
                        <div className={s.Medium}>
                            <div className={s.Data}>
                                <p>{pokemon.hp}</p>
                                <p>HP</p>
                            </div>
                            <div>
                                    <p>{pokemon.attack}</p>
                                    <p>Attack</p>
                            </div>
                                <div>
                                    <p>{pokemon.defense}</p>
                                    <p>Defense</p>
                                </div>
                                <div>
                                    <p>{pokemon.speed}</p>
                                    <p>Speed</p>
                                </div>
                                <div>
                                    <p>{pokemon.height}</p>
                                    <p>Height</p>
                                </div>
                                <div>
                                    <p>{pokemon.weight}</p>
                                    <p>Weight</p>
                                </div>

                        </div>
                        <div className={s.Bottom}>
                            <h2>Tipo:</h2>
                            <div>
                            {
                                pokemon.types.map(e=>{
                                    return <h3 className={s.Type}>{e.name}</h3>
                                })
                            }
                            </div>
                        </div>
                        <div className={s.HOME}>
                                <Link to={"/Home"}><button className={s.BUTTON}>HOME</button></Link>

                        </div>
                    </div>
                </div>
                </>
                :pokemon === undefined?
                        <img src="https://i.pinimg.com/originals/4d/f0/38/4df03842be46631dc8b4f1b313638161.gif" /* width="300" height="300" */ alt="" className={s.loading} />:
                <h1>Pokemon no encontrado</h1>
            }
        </div>
    )
}
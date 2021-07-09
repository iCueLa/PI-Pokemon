
import axios from "axios";
import { GET_POKEMONS, GET_DATA } from "../Utils/const";



export const GET_POKEMON = "GET_POKEMON"
export const GET_DATAS = "GET_DATA"
export const FILTER_AZ = "FILTER_AZ"
export const FILTER_ZA = "FILTER_AZ"


export const getPokemons = ()=>{
    return (dispatch)=>{
        axios.get(GET_POKEMONS)
        .then(res=>{ dispatch({type: GET_POKEMON, payload: res.data})})
    }
    }

    export const getdata = (id)=>{
    return (dispatch)=>{
        axios.get(`${GET_DATA}${id}`)
        .then(res=>{ dispatch({type: GET_DATAS, payload: res.data})})
        .catch(error=>{
            if(error.response?.status){
                if(error.response.status=== 404){
                    dispatch({type: GET_DATAS, payload: null})
                }
            }
        })
    }
    }

    export const clearPage = ()=>{
    return {type: GET_DATAS, payload: undefined}
    }

    export const filterAz = ()=>{
    return {type: FILTER_AZ}
    }

    export const filterZa = ()=>{
    return {type: FILTER_AZ}
    }



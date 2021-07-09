import {GET_POKEMON, GET_DATAS,FILTER_AZ, FILTER_ZA } from "../actions/actions"
import { orderAZ } from "../controllers/filter";




const initialState = {
    pokemonFavourites: [],
    pokemons: [],
    data: undefined,

};

function rootReducer(state = initialState, action) {
    if(action.type === GET_POKEMON){
        return {
            ...state,
            pokemons: [action.payload]
        }

    }
    if(action.type === GET_DATAS){
        return {
            ...state,
            data: action.payload
        }

    }
    if(action.type === FILTER_AZ){
        console.log("anda")
         orderAZ(state.pokemons)
        }

    
    return state
}

export default rootReducer;
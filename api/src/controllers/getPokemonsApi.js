const axios = require('axios')
const {
    POKEMON_URL
} = require('../Util/const')




const getPokemonsApi = async () => {
    const pokemonOne = await axios.get(POKEMON_URL) //Traigo los primeros 20 pokemons de la Api
    const pokemonTwo = await axios.get(pokemonOne.data.next) // Los siguientes 20 pokemones 
    const totalPokemons = pokemonOne.data.results.concat(pokemonTwo.data.results) // los guardo a los 40 en una variable
    const prueba1 = await axios.get(totalPokemons[0].url)
    try {
  
        const result = totalPokemons.map(e=>  axios.get(e.url))
         let pokemons = Promise.all(result)
            .then(e=> {
                let pokemon = e.map(e=> e.data)
                let resultado = []
                pokemon.map(e => {
                      resultado.push({
                        id: e.id,
                        name : e.name,
                        hp: e.stats[0].base_stat,
                        attack: e.stats[1].base_stat,
                        defense: e.stats[2].base_stat,
                        speed: e.stats[5].base_stat,
                        height: e.height,
                        weight: e.weight,
                        sprite: e.sprites.other.dream_world.front_default,
                        types: e.types.length < 2 ? [{name :e.types[0].type.name}] : [{name :e.types[0].type.name}, {name :e.types[1].type.name}]

                        })
                })
                return resultado
            })
        return pokemons
    } catch (err) {
        console.log(err)
    }

}


module.exports = getPokemonsApi
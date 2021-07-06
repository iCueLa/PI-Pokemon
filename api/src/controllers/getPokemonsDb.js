
const { Pokemon , Type} = require('../db')



const getPokemonsDb = async () => {
    const pokemonBb = await Pokemon.findAll({include: Type})
    try{
        return pokemonBb
    }catch(err){
        console.log(err)
    }

}


module.exports = getPokemonsDb
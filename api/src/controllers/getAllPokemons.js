const getPokemonsApi = require("./getPokemonsApi")
const getPokemonsDb = require("./getPokemonsDb")


//Esta Funcion trae a los datos de los pokemones de la Api y los de mi DB y los concatena para despues mostrar todo en la Pag

const getAllPokemons = async () => {
    const api = await getPokemonsApi()
    const db = await getPokemonsDb()
    const allPokemons = db.concat(api)


    return allPokemons
}

module.exports = {
    getAllPokemons
}
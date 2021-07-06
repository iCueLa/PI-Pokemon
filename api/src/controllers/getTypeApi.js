const axios = require('axios')
const {Type} = require('../db')
const {POKEMON_TYPE} = require("../Util/const")


//Agrega los tipos de pokemones a la base de datos automaticamente cuando se levanta el servidor!!

const addTypeDb = async ()=>{
    try{
        const prueba = await axios.get(POKEMON_TYPE)
        const prueba2 = prueba.data.results
            prueba2.map(e=>{
            Type.create({name : e.name})
        /* console.log({name: e.name}) */
        })
    }catch(err){
        console.log(err)
    }
}
addTypeDb()

//Traigo los tipos de mi base de datos y los mando para el router!
const getTypeApi = async ()=>{ 
    const result = await Type.findAll()
    return result
       
}

module.exports = {
    getTypeApi}
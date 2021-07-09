const { Pokemon , Type} = require('../db')


const createPokemon = async (name, hp, attack, defense, speed, height, weight, sprite, type) =>{
    try{
      const addpokemon = await Pokemon.create({
       name: name ,
       hp: hp || 0,
       attack: attack || 0,
       defense: defense || 0,
       speed: speed || 0,
       height: height || 0,
       weight: weight || 0 ,
       sprite: sprite || "https://www.vhv.rs/dpng/d/424-4249607_poke-ball-png-pokeball-png-transparent-png.png"
     },
     )
     if(type.length === 1){
       await addpokemon.addType(type[0])
     }else{
       await addpokemon.addType(type[0])
       await addpokemon.addType(type[1])
     }
     return addpokemon
    }catch(err){
      return {result: "Sucedio un error, verificar los datos ingresados"}
    }
}

module.exports = createPokemon

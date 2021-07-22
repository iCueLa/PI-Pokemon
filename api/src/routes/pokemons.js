const { Router } = require('express');
const { getAllPokemons } = require('../controllers/getAllPokemons');
const getDetailPokemon = require('../controllers/getDetailPokemon');
const createPokemon = require('../controllers/createPokemon');

//pruebas
const getPokemonsApi = require('../controllers/getPokemonsApi');
const getPokemonsDb = require('../controllers/getPokemonsDb');

const router = Router()




module.exports = router



router.get('/', async(req,res,next)=>{
  const {name} = req.query
  const result = await getAllPokemons()
  try{
    if (name) {
      let resultName = await getDetailPokemon('GET_NAME', name);
       /* resultName.length	< 0? res.status(200).send(resultName) :res.status(404).json('Pokemon not found') ; */
       if(resultName.length === 0){
         return res.status(404).json('Pokemon not found')
       }
       return res.status(200).json(resultName)
      }
       return res.status(200).json(result)
    
  }catch(err){
     return next(err)
  }
});

router.get('/API', async(req, res, next)=>{
const result = await getPokemonsApi()
try{
  return res.status(200).json(result)
}catch(err){
  next(err)
}
})

router.get('/DB', async(req, res, next)=>{
const result = await getPokemonsDb()
try{
  return res.status(200).json(result)
}catch(err){
  next(err)
}
})

router.get("/:id", async(req, res, next)=>{
    const { id } = req.params
    const result = await getDetailPokemon("GET_ID", id)
    try{
        return res.json(result)
    }catch(err){
        next(err)
    }    
});



router.post('/',  async (req,res,next) =>{
  const {name, hp, attack, defense, speed, height, weight, sprite, type} = req.body
 try{
   const result = await createPokemon(name, hp, attack, defense, speed, height, weight, sprite, type)
  res.send(result)
 }catch(err){
   next(err)
 }

});

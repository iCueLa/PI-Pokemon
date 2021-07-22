import React from "react";
import NavBar from "./components/Navbar/Navbar"
import {Inicio}  from "./views/Inicio/Inicio";
import { Route} from "react-router-dom";
import Pokedex from "./views/Home/Pokedex";
import { CreatePokemon } from "./views/createPokemon/createPokemon";
import { PokemonDetail } from "./views/PokemonDetail/PokemonDetail";

function App() {
  return (
      <React.Fragment>
          <Route exact path="/" component={Inicio} />
          <Route path="/Home" component={NavBar} />
          <Route exact path="/Home" component={Pokedex} />
          <Route path="/Home/Add" component={CreatePokemon} />
          <Route path="/Home/data/:id" component={PokemonDetail} />       
      </React.Fragment>
  );
}

export default App;

import React from 'react'
import { Provider } from 'react-redux'
import PokemonIndexContainer from './pokemon/pokemon_index_container'

const Root = ({ store }) => (
  <Provider store = {store}> 
    <PokemonIndexContainer />
  </Provider>
);

export default Root;

// If we didn't destructure on line 4, we would do argname.store on line 5. Got it's props from pokedex.jsx
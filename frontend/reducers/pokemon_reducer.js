import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (oldState = {}, action) => { // Only pertains to a single slice of state, then we assign it to the pokemon key in the combineReducers function in the rootReducer
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign(newState, action.pokemon); // Same as the thing below
      // let pokes = Object.values(action.pokemon);
      // pokes.forEach(poke => newState[poke.id] = poke); 
      // return newState;
    default:
      return newState;
  }
}

export default pokemonReducer;
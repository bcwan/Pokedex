import * as APIUtil from "../util/api_util";

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"; 

export const receiveAllPokemon = pokemon => ({ 
    type: RECEIVE_ALL_POKEMON, 
    pokemon
});

// invokes the function and returns "dispatch" and the second fat arrow, which thunk invokes
// once we get back the ajax result, we want to get back to redux cycle

export const requestAllPokemon = () => (dispatch) => ( // thunk action creator
    APIUtil.fetchAllPokemon() 
        .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

// 1) We do dispatch(requestAllPokemon()) in our components
// 2) The 2nd fat arrow function get's invoke inside of the thunk middleware 
// 3) We turn our AJAX response (pokemon) into a regular action and dispatch it, which gets put through the whole Redux cycle again, thunk and all!  

// dispatch always starts the Redux cycle
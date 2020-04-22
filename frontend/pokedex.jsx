import React from 'react'
import ReactDOM from 'react-dom'
import { receiveAllPokemon, requestAllPokemon } from "./actions/pokemon_actions"
import * as APIUtil from "./util/api_util"
import configureStore from './store/store'
import selectAllPokemon from './reducers/selectors'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {

  // testing
  window.store = store;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  // end of testing

  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
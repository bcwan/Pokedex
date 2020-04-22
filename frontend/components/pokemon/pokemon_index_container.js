import { connect } from 'react-redux'
import selectAllPokemon from '../../reducers/selectors'
import { requestAllPokemon } from '../../actions/pokemon_actions'
import PokemonIndex from './pokemon_index'
//both functions are invoked when redux store updates
//determines and constructs props that are passed into presentational component

//read
const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

//write
const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});


export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
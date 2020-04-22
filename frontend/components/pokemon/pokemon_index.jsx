import React from "react"


class PokemonIndex extends React.Component { 
    constructor(props) { 
        super(props)
        // this.state = {};
    }

    componentDidMount() { 
      this.props.requestAllPokemon();
    }

    render() {
        const { pokemon } = this.props;
        return (
            <ul>
                { 
                    this.props.pokemon.map(poke => { 
                        return <li key={poke.id}><img src={poke.image_url}></img>{poke.name}</li> // MUST RETURN!!!! DON'T FORGET!!!
                    }) 
                }
            </ul>
        )
    }
}


export default PokemonIndex
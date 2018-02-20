import './style/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import superagent from 'superagent'

const API_URL = 'https://pokeapi.co/api/v2'

class PokemonForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonName: null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSumbit = this.handleSumbit.bind(this)
  }

  handleChange(e) {
    this.setState({pokemonName: e.target.value})
  }

  handleSumbit(e) {
    e.preventDefault()
    this.props.search(this.state.pokemonName)
  }

  render() {
    return (
      <form className="search_form" onSubmit={this.handleSumbit}>
        <input
          type="text"
          name="pokemon_name"
          val={this.state.pokemonName}
          onChange={this.handleChange}/>
      </form>
    )
  }
}

class RenderPokemon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: this.props.pokemon ? this.props.pokemon : null,
    }
  }

  render() {
    return (
      <div className="render_pokemon">
        {console.log(this.state.pokemon)}
        <h2>{this.state.pokemon.name}</h2>
        <img src={this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name}/>
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonLookup: null,
      pokemonError: null,
    }
    this.pokemonSearch = this.pokemonSearch.bind(this)
  }

  pokemonSearch(name) {

    superagent.get(`${API_URL}/pokemon/${name}`)
    .then(res => this.setState({pokemonLookup: res.body, pokemonError: null}))
    .catch(err => this.setState({pokemonError: err}))
  }

  render() {
    return (
      <div>
        <PokemonForm search={this.pokemonSearch}/>
        { this.state.pokemonLookup ?
          <RenderPokemon pokemon={this.state.pokemonLookup}/>
          :
          undefined
        }

        { this.state.pokemonError ?
          <h2>Shit broke!</h2>
          :
          undefined
        }
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))

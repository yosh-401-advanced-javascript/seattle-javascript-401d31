'use strict'

import React from 'react'
import ReactDom from 'react-dom'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <h1>Counter App!</h1>
      </header>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    this.happening = 'a thing'
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState(state => ({count: state.count + 1}))
  }

  render() {
    return (
      <div>
        <Navbar />
        <p onClick={this.handleClick}>Counter: {this.state.count}</p>
        <p>{this.happening}</p>
        <Navbar />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))

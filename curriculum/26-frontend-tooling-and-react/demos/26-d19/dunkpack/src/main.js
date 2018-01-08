import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'

class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
    this.state.value = this.props.value;
    this.state.suit = this.props.suit;
    console.log(this.state)

    this.increment = this.increment.bind(this)
  }

  increment() {
    let newVal = this.state.value + 1
    this.setState({value: newVal})
  }

  render() {
    return (<div className={'card ' + this.props.suit}
    onClick={this.increment}>
      <div className="top-left">{this.props.value}</div>
      <div className="bot-right">{this.props.value}</div>
    </div>)
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Card value="A" suit="hearts" />
        <Card value="2" suit="spades" />
        <Card value="7" suit="clubs" />
        <Card value="8" suit="diamonds" />
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'))
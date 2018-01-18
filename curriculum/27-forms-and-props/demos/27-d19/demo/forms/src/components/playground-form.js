import React from 'react';

class PlayGroundForm extends React.Component {
  constructor(props) {
    this.state = {
      name: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({name: value})
  }

  render() {
    return (
      <form>
        <div>
          <p>
            Name:
            <input size="40" type="text" value={this.state.name}
              placeholder="Jefferson G. Memorial Park"/>
          </p>
          <textarea value={this.state.description}
            placeholder="This park has many nice features...">
          </textarea>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form> 
    )
  }
}

module.exports = PlayGroundForm
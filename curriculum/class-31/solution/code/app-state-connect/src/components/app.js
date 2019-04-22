import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions.js';
import { whisper } from './util.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    whisper('hello');

    return <div onClick={this.props.handleChange}>{this.props.stuff.foo}</div>;
  }
}

const mapStateToProps = state => ({
  stuff: state.someStuff,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleChange: () => dispatch(actions.changer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

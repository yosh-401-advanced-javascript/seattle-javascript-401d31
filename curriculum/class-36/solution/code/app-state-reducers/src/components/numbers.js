import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../store/numbers-actions.js';

const Numbers = props => {
  return <div onClick={props.handleChange}>NUMBERS: {props.numbers.currentNumber}</div>;
}

const mapStateToProps = state => ({
  numbers: state.numbers,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleChange: () => dispatch(actions.resetNumber()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Numbers);

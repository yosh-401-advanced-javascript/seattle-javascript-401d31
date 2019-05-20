import React from 'react';
import { connect } from 'react-redux';

import List from './list';

import * as personActions from '../store/person-actions.js';

const Person = props => {
  return (
    <List layout="detail">
      {Object.keys(props.person).map((key, i) => (
        <li key={i}>
          <span>{key}</span>
          <span>{props.person[key]}</span>
        </li>
      ))}
    </List>
  );
};

const mapStateToProps = state => ({
  person: state.person,
});

export default connect(mapStateToProps)(Person);

import React from 'react';
import { connect } from 'react-redux';

import List from './list';

const People = props => {
  return (
    <List layout="list">
      {props.people.results.map((result, i) => (
        <li key={i} onClick={() => props.fetcher(result.url)}>
          {result.name}
        </li>
      ))}
    </List>
  );
};

const mapStateToProps = state => ({
  people: state.people,
});

export default connect(mapStateToProps)(People);

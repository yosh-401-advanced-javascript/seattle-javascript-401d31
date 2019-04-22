import React from 'react';
import { connect } from 'react-redux';

import List from './components/list';
import If from './components/if';
import Modal from './components/modal';
import Person from './components/person.js';
import People from './components/people.js';

import * as peopleActions from './store/people-actions.js';
import * as personActions from './store/person-actions.js';

const swapi = 'https://swapi.co/api/people/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  fetchAll = url => {
    this.props.getPeople(url);
  };

  fetchPerson = url => {
    this.props.clear();
    this.props.getPerson(url);
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.fetchAll(swapi)}>Load Characters</button>
        <People fetcher={this.fetchPerson} />
        <If condition={this.state.showModal}>
          <Modal title={this.props.person.name} close={this.toggleModal}>
            <Person />
          </Modal>
        </If>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  people: state.people,
  person: state.person,
});

const mapDispatchToProps = (dispatch, getState) => ({
  getPeople: url => dispatch(peopleActions.getPeople(url)),
  getPerson: url => dispatch(personActions.getPerson(url)),
  clear: url => dispatch(personActions.clear(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

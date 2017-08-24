'use strict';

import React from 'react';
import {subStateUpdaterCreate, changeHandlerCreate} from '../../lib/util.js';
import profileRequests from '../../lib/profile-requests.js';

class ProfileCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      total: 0,
    };

    this.appSetState = props.app.setState;
    this.resetFormState = () => this.setState({total: 0, name: ''});
    this.handleChange = changeHandlerCreate(this.setState.bind(this));
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    let data = {
      name: this.state.name,
      total: this.state.total,
    };

    if(!data.name){
      return this.updateFormState({error: true});
    }

    profileRequests.create(data)
    .then(profile => this.appSetState({profile}))
    .then(() => this.resetFormState())
    .catch(console.error);
  };

  render() {
    return (
      <form
        className='profile-create-form'
        onSubmit={this.handleSubmit}>
      <input
        name='name'
        placeholder='name'
        onChange={this.handleChange}
        value={this.state.name}
        />

      <input
        min='0'
        step='any'
        name='total'
        type='number'
        onChange={this.handleChange}
        value={this.state.total}
        />

      <button type='submit'> create budget </button>
      </form>
    );
  }
};

export default ProfileCreateForm;

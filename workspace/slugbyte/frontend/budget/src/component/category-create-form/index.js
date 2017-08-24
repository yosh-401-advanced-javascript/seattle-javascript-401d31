'use strict';

import React from 'react';
import profileRequests from '../../lib/profile-requests.js';
import {changeHandlerCreate} from '../../lib/util.js';

class CategoryCreateForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
    };

    this.appState = props.app.state;
    this.appSetState = props.app.setState;
    this.handleChange = changeHandlerCreate(this.setState.bind(this));
    this.resetFormState = this.resetFormState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetFormState() {
    this.setState({title: ''});
  }

  handleSubmit(e){
    e.preventDefault();

    let profileData = this.appState.profile;
    profileData.categorys.unshift(this.state.title);

    profileRequests.update(profileData)
    .then(profile => this.appSetState({profile}))
    .then(() => this.resetFormState())
    .catch(console.error);
  }

  render(){
    return (
      <form 
        onSubmit={this.handleSubmit}
        className='category-create-form'>

        <input 
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          placeholder='category'
          />

        <button type='submit'> + </button>
      </form>
    );
  }
}

export default CategoryCreateForm;

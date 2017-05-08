'use strict';

import React from 'react';
import budgetProfile from '../../lib/budget-proflie.js';
import {changeHandlerCreate} from '../../lib/util.js';

class CategoryCreateForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
    };

    this.rootState = props.app.state;
    this.rootSetState = props.app.setState;
    this.handleChange = changeHandlerCreate(this.setState.bind(this));
    this.resetFormState = this.resetFormState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetFormState() {
    this.setState({title: ''});
  }

  handleSubmit(e){
    e.preventDefault();

    let profileData = this.rootState.profile;
    console.log('profileData', this.rootState);
    //profileData.categorys.push(this.state.title);
    console.log('profileData', profileData);

    //budgetProfile.update(profileData)
    //.then(profile => this.rootSetState({profile}))
    //.then(() => this.resetFormState())
    //.catch(console.error);
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

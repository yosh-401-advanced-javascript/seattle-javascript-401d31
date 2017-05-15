'use strict';

import React from 'react';
import { changeHandlerCreate, classToggler, renderIf } from '../../lib/util.js';
import budgetProfile from '../../lib/budget-proflie.js';

class ProfileChangeForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '', 
    };

    this.appSetState = props.app.setState;
    this.getClassName = this.getClassName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = changeHandlerCreate(this.setState.bind(this));
    this.resetFormState = () => this.setState({name: '', error: false, notFound: ''});
  }

  getClassName(){
    return classToggler({
      'profile-change-form': true,
      'error': this.state.error,
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    budgetProfile.fetch({name: this.state.name})
    .then(profile => this.appSetState({profile}))
    .then(() => this.resetFormState())
    .catch((err) => {
      this.setState({ notFound: this.state.name });
      console.error(err);
    });
  };

  render(){
    return (
      <form 
        autoComplete='off'
        className={this.getClassName()} 
        onSubmit={this.handleSubmit}>

        {renderIf(this.state.notFound,
          <p className="hint error">
            Sorry, we cant find the profile {this.state.notFound}.
          </p>)}

        <input 
          name='name'
          minLength='1'
          placeholder='name'
          onChange={this.handleChange}
          value={this.state.name}
          />

          <button type='submit'> change budget </button>
      </form>
    );
  }
};

export default ProfileChangeForm;

'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {print, renderIf} from '../../lib/util.js';
import {signup} from  '../../actions/auth-actions.js';

class AuthSignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    console.log('wat')
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.signup(this.state)
    .then(() => this.props.onSuccess())
  }

  render(){
    return (
      <form 
        noValidate
        className='auth-signup-form'
        onSubmit={this.handleSubmit}>

        <input 
          name='username'
          placeholder='username'
          type='text'
          value={this.state.username}
          onChange={this.handleChange}
          />

        <input
          name='email'
          placeholder='email'
          type='email'
          value={this.state.email}
          onChange={this.handleChange}
          />

        <input 
          name='password'
          placeholder='password'
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
          />

        <button type='submit'> sign up </button>
      </form>
    );
  }
}

let mapStateToProps = (state) => ({
  loginError: state.auth.error,
})

let mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
})

AuthSignupForm = connect(mapStateToProps, mapDispatchToProps)(AuthSignupForm)

export default AuthSignupForm;

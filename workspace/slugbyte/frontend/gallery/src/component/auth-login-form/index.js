'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {print, renderIf} from '../../lib/util.js';
import {login} from  '../../actions/auth-actions.js';

class AuthLoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let {target} = e;
    let {value} = target;
    let {name} = target;

    this.setState({[name]: value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.login(this.state)
    .then(() => this.props.onSuccess())
  }

  render(){
    return (
      <form
        noValidate
        onSubmit={this.handleSubmit}
        >

        <input
          name='username'
          placeholder='username'
          type='text'
          value={this.state.username}
          onChange={this.handleChange}
          />

        <input
          name='password'
          placeholder='password'
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
          />

          <button type='submit'> login </button>
      </form>
    );
  }
}

let mapStateToProps = (state) => ({
  loginError: state.auth.error,
});

let mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
})

AuthLoginForm = connect(mapStateToProps, mapDispatchToProps)(AuthLoginForm)

export default AuthLoginForm;

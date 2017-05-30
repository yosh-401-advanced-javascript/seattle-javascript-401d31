'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {history, renderIf, print} from '../../lib/util.js';
import {Field, reduxForm} from 'redux-form';

import AuthLoginForm from '../../component/auth-login-form';
import AuthSignupForm from '../../component/auth-signup-form';
import ProfileCreateForm from '../../component/profile-create-form';

let renderCount = 0;
class Landing extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      token: '',
      showSignup: false,
      showProfile: false,
    };

    this.handleSwitchAuthForm = this.handleSwitchAuthForm.bind(this);
    this.handleSignupSuccess = this.handleSignupSuccess.bind(this);
    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
  }

  handleSignupSuccess(){
    this.props.history.push('/welcome/create-profile');
    this.setState({showProfile: true });
  }

  handleLoginSuccess(){
    this.props.history.push('/dashboard');
  }

  componentWillMount(){
    // when the component mounts, set the view state based off the route params
    let {authAction} = this.props.match.params;
    if(authAction === 'create-profile') {
      this.setState({ showSignup: false, showProfile: true})
    } else if (authAction === 'signup' ) {
      this.setState({ showSignup: true, showProfile: false})
    } else {
      this.setState({ showSignup: false, showProfile: false})
    }
  }

  handleSwitchAuthForm(){
    // when switching view state allways change the route
    if(this.props.match.params.authAction === 'login'){
      this.props.history.push('/welcome/signup')
    } else {
      this.props.history.push('/welcome/login')
    }

    this.setState(state => ({
      showSignup: !state.showSignup,
    }))
  }

  render(){
    let {showSignup, showProfile, showLogin} = this.state;

    return (
      <div className='landing-container'>
        <h1> landing </h1>
        {renderIf(!showProfile, 
          <div>
            {renderIf(showSignup,  
              <AuthSignupForm onSuccess={this.handleSignupSuccess} />, 
              <AuthLoginForm onSuccess={this.handleLoginSuccess} />)} 

            <button onClick={this.handleSwitchAuthForm}> {showSignup ? 'login' : 'signup'} </button>
          </div> 
        )}

        {renderIf(showProfile,  <ProfileCreateForm onSuccess={this.handleLoginSuccess}/>)}
      </div>
    );
  }
}

// used to map redux state to props
let mapStateToProps = (state) => ({
    title: state.title,
    token: state.auth.token,
    profileUrl: state.profile.photoURL,
});

// used to map functions that can dispatch actions
let mapDispatchToProps = (dispatch) => ({});

// connect the componet to redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)

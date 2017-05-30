'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {profileCreate} from '../../actions/profile-actions.js';
import {renderIf, print, fileToDataURL} from '../../lib/util.js';
import PhotoInput from '../photo-input';


class ProfileCreateForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      photo: {},
      preview: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let {target} = e;
    let value = target.files[0]
    this.setState({photo: value})

    fileToDataURL(value)
    .then(preview => this.setState({preview}))
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.profileCreate({photo: this.state.photo})
    .then(() => this.props.onSuccess())
  }

  render(){
    return (
      <form 
        noValidate
        onSubmit={this.handleSubmit} 
        className='profile-create-form'>

        <label> Set your profile picture! </label>
        <PhotoInput 
          name='photo'
          value={this.state.photo}
          onChange={this.handleChange}
          preview={this.state.preview}
          />

        <button type='submit'> upload </button>
      </form>
    )
  }
}


let mapStateToProps = () => ({})
let mapDispatchToProps = (dispatch, getState, props) => ({
  profileCreate: (profile) => dispatch(profileCreate(profile)),
});

ProfileCreateForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileCreateForm);

export default reduxForm({form: 'profileCreateForm'})(ProfileCreateForm);

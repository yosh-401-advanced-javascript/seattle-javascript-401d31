'use strict';

import React from 'react';
import {connect} from 'react-redux';
import PhotoInput from '../photo-input';
import {fileToDataURL} from '../../lib/util.js';
import {userPhotosCreate} from '../../actions/user-photos-actions.js';

class PhotoCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photo: '',
      description: '',
      preview: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let {target} = e;
    let value = target.type === 'file' ? target.files[0] : target.value;
    let {name} = target;

    if(name === 'photo'){
      fileToDataURL(value)
      .then(preview => this.setState({preview}))
    }

    this.setState({[name]: value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.userPhotosCreate({
      photo: this.state.photo,
      description: this.state.description,
    })
    .then(() => this.setState({description: '', preview: ''}));
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <PhotoInput
          name='photo'
          value={this.state.photo}
          onChange={this.handleChange}
          preview={this.state.preview}
          />

          <input
            name='description'
            type='text'
            placeholder='description'
            value={this.state.description}
            onChange={this.handleChange}
            />


          <button type='submit'> upload </button>
      </form>
    );
  }
}

let mapStateToProps = () => ({})
let mapDispatchToProps = dispatch => ({
  userPhotosCreate: (photo) => dispatch(userPhotosCreate(photo)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhotoCreateForm);

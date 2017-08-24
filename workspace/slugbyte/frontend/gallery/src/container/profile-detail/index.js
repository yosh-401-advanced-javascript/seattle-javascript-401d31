'use strict';

import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../../component/navbar';
import {profilePhotosFetch} from '../../actions/profile-actions.js';
import PhotoCollection from '../../component/photo-collection';

class ProfileDetail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      profile: {},
    }
  }

  componentWillMount(){
    let {username} = this.props.match.params;
    console.log('username', username);
    this.setState({username});
    this.props.profilePhotosFetch(username)
    .then(action => action.payload)
    .then(photos => {
      console.log('cooool', photos)
      if(photos.length > 0){
        this.setState({profile: photos[0].profile})
      }
    })
    .catch(console.error)
  }

  render(){
    return (
      <div className='profile-detail-container'>
        <Navbar />
        <header className='profile-header'>
          <img src={this.state.profile.photoURI} />
          <h2> {this.state.profile.username} </h2>
        </header>
        <PhotoCollection photos={this.props.photos} history={this.props.history}/>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  photos: state.profile.photos,
})

let mapDispatchToProps = dispatch => ({
  profilePhotosFetch: (username) => 
    dispatch(profilePhotosFetch(username)),
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ProfileDetail)

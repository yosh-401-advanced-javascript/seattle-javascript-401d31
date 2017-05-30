'use strict'

import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../../component/navbar';
import {userPhotosFetch} from '../../actions/user-photos-actions.js';
import PhotoCreateForm from '../../component/photo-create-form';
import PhotoCollection from '../../component/photo-collection';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.userPhotosFetch();
  }

  render(){
    return (
      <div className='dashboard-container'>
        <Navbar history={this.props.history}/>
        <h1> dashboard </h1>
        <PhotoCreateForm />
        <PhotoCollection photos={this.props.photos} history={this.props.history}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile,
  photos: state.userPhotos,
});

let mapDispatchToProps = (dispatch) => ({
  userPhotosFetch: () => dispatch(userPhotosFetch()),
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Dashboard)


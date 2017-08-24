'use strict';


import React from 'react';
import {connect} from 'react-redux';

import CommentCreateForm from '../../component/comment-create-form';
import {photoSelectedFetch, photoCommentsFetch} from '../../actions/photo-actions.js';

class PhotoDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    console.log('cool beans')
    let {photoID} = this.props.match.params
    console.log(this.props.match)
    console.log('photoID', photoID)
    Promise.all([
      this.props.photoSelectedFetch(photoID),
      this.props.photoCommentsFetch(photoID),
    ])
    .then(res => console.log('res', res))
    .catch(console.error)
  }

  render(){
    let selected = this.props.selected || {}
    return (
      <div>
        <h2> photos </h2>
        <div className='photo'>
          <img src={selected.photoURI} />
          <p>{selected.description}</p>
        </div>
        <div> 
          <CommentCreateForm />
          {this.props.comments.map((item, i) => {
              return (
                <div key={i}>
                  <img src={item ? item.profile.photoURI : ''} />
                  <p> {item ? item.content : ''} </p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    selected: state.photo.selected,
    comments: state.photo.comments,
  }
}

let mapDispatchToProps = dispatch => ({
  photoSelectedFetch: (id) => dispatch(photoSelectedFetch(id)),
  photoCommentsFetch: (id) => dispatch(photoCommentsFetch(id)),
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(PhotoDetail)

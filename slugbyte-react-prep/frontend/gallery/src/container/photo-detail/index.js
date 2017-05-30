'use strict';


import React from 'react';
import {connect} from 'react-redux';

import CommentCreateForm from '../../component/comment-create-form';
import {photosSelectedFetch} from '../../actions/photo-actions.js';
import {commentsFetch} from '../../actions/comment-actions.js';

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
      this.props.photosSelectedFetch(photoID),
      this.props.commentsFetch(photoID),
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
    selected: state.photos.selected,
    comments: state.comments,
  }
}

let mapDispatchToProps = dispatch => ({
  photosSelectedFetch: (id) => dispatch(photosSelectedFetch(id)),
  commentsFetch: (id) => dispatch(commentsFetch(id)),
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(PhotoDetail)

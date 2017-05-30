'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {commentCreate} from '../../actions/comment-actions.js';

class CommentCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let {target} = e;
    let content  = target.value;
    this.setState({content});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.commentCreate({
      content: this.state.content,
      photoID: this.props.photo._id,
    })
    .then(() => this.setState({content: ''}));
  }

  render(){
    return (
      <form 
        noValidate
        onSubmit={this.handleSubmit}
        >
        <input
          type='text'
          name='content'
          value={this.state.content}
          placeholder={`add comment as ${this.props.profile.username}...`}
          onChange={this.handleChange}
          />

          <button type='submit'> send </button>

      </form>
    );
  }
}

let mapStateToProps = state => ({
  photo: state.photos.selected,
  profile: state.profile,
})

let mapDispatchToProps = dispatch => ({
  commentCreate: (comment) => dispatch(commentCreate(comment)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentCreateForm)

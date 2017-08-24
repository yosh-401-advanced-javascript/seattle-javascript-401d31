'use strict';

import React from 'react';
import cardRequests from '../../lib/card-requests.js';
import {classToggle} from '../../lib/util.js';

class CardCreateForm extends React.Component {
  constructor(props){
    super(props);
    // the form manages its on views state for controlled inputs
    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    // requst the backend to create a card with state of 0 (backlog)
    // update the frontend if successfull
    cardRequests.create({
      state: 0,
      title: this.state.title,
    })
    .then(card => {
      this.props.app.setState(state => ({
        cardRequestss: [card].concat(state.cardRequestss),
      }));
    });

    // reset the form state to clear it
    this.setState({title: ''})
    
  };

  // update the input state on change
  handleChange(e){
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  render(){
    return (
      <form 
        className='card-create-form'
        onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange} 
          name='title' 
          autoComplete="off"
          value={this.state.title} 
          placeholder='title' />
      </form>
    );
  }
};

export default CardCreateForm;

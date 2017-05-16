'use strict';

import React from 'react';
import kanbanCard from '../../model/kanban-card.js';
import {check, classToggle} from '../../lib/util.js';

let CardCreateForm = ({state, setState}) => {
  let handleSubmit = (e) => {
    e.preventDefault();
    kanbanCard.create({
      state: 0,
      title: state.cardCreateForm.title,
      comments: [],
    })
    .then(card => {
      setState({
        kanbanCards: [card].concat(state.kanbanCards),
        cardCreateForm: {title: ''},
      });
    });
  };

  let onChange = (e) => {
    let change = {};
    change[e.target.name] = e.target.value;
    setState({cardCreateForm: change});
  };

  return (
    <form 
      className='card-create-form'
      onSubmit={handleSubmit}>
      <input 
        onChange={onChange} 
        name='title' 
        autoComplete="off"
        value={state.cardCreateForm.title} 
        placeholder='title' />
    </form>
  );
};

export default CardCreateForm;

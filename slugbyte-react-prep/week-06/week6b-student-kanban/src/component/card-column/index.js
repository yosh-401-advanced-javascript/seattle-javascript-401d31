'use strict';

import React from 'react';
import kanbanCard from '../../model/kanban-card.js';
import {check} from '../../lib/util.js';

import Card from '../card';
import CardCreateForm from '../card-create-form';

const CardColumn = ({state, setState, title, cards}) => {
  let titleToStateMap = { 'backlog': 0, 'ready': 1, 'in progress': 2, 'done': 3 };

  // the onDrop event will not trigger unless you preventDefault 
  // the onDragOver event
  let onDragOver = (e) => e.preventDefault();

  let onDrop = (e) => {
    // get the id that was stored onDragStart
    let dropId = e.dataTransfer.getData('text/plain');

    // get a refernce to the card on the state
    let card = state.kanbanCards.reduce((found, item) => { 
      console.log(item._id == dropId);
      return item._id === dropId ? item : found;
    }, null);

    // if the card was not found stop
    if(!card) return;

    // modify the cards state propery to match the column it was droped in
    card.state = titleToStateMap[title];

    // request the backend for an update
    kanbanCard.update(card)
    .then(updated => {
      // update the state with the new card once the backend was updated
      setState({
        kanbanCards: state.kanbanCards.map(item => {
          return (item._id == updated._id) ? updated: item;
        }),
      });
    });

  };

  return (
    <div onDrop={onDrop} onDragOver={onDragOver} className='card-column'>
      <h2> {title} </h2>

      {check(title === 'backlog',
              <CardCreateForm 
                state={state} 
                setState={setState} />)}

      {cards.map(card => 
                 <Card 
                  state={state} 
                  setState={setState} 
                  card={card} />)}
    </div>
  );
};

export default CardColumn;

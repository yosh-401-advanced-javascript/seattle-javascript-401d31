'use strict';

import React from 'react';
import cardRequests from '../../lib/card-requests.js';
import {renderIf} from '../../lib/util.js';

import Card from '../card';
import CardCreateForm from '../card-create-form';

const CardColumn = ({app, title, cards}) => {
  let titleToStateMap = { 'backlog': 0, 'ready': 1, 'in progress': 2, 'done': 3 };

  // the onDrop event will not trigger unless you preventDefault 
  // the onDragOver event
  let onDragOver = (e) => e.preventDefault();

  let onDrop = (e) => {
    // get the id that was stored onDragStart
    let dropId = e.dataTransfer.getData('text/plain');

    // get a refernce to the card on the state
    let card = app.state.cardRequestss.reduce((found, item) => { 
      console.log(item._id == dropId);
      return item._id === dropId ? item : found;
    }, null);

    // if the card was not found stop
    if(!card) return;

    // modify the cards state propery to match the column it was droped in
    card.state = titleToStateMap[title];

    // request the backend for an update
    cardRequests.update(card)
    .then(updated => {
      // update the state with the new card once the backend was updated
      app.setState(state => ({
        cardRequestss: state.cardRequestss.map(item => {
          return (item._id == updated._id) ? updated : item;
        }),
      }));
    })
    .catch(console.error);
  };

  return (
    <div onDrop={onDrop} onDragOver={onDragOver} className='card-column'>
      <h2> {title} </h2>

      {renderIf(title === 'backlog',
              <CardCreateForm 
                app={app} />)}

      {cards.map(card => 
                 <Card 
                  key={card._id}
                  app={app}
                  card={card} />)}
    </div>
  );
};

export default CardColumn;

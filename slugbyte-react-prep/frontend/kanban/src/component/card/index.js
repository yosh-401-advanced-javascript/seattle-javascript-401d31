'use strict';

import React from 'react';
import cardRequests from '../../lib/card-requests.js';
import {renderIf} from '../../lib/util.js';

const Card = ({app, card}) => {
  // delete a card from the backend then update the app state
  let handleDeleteClick = () => {
    cardRequests.delete(card)
    .then(() => {
      app.setState( state => ({
        cardRequestss: state.cardRequestss.filter(item => item._id !== card._id),
      }));
    })
    .catch(console.error);
  };

  // this function is currys a event handler that will update the state of a card
  // on the backend and then update the app state
  let incCardState = num => () => {
    card.state += num;
    cardRequests.update(card)
    .then( card => {
      app.setState( state => ({cards: state.cardRequestss.map(item => {
          return (card._id == item._id ) ? card : item;
        }),
      }));
    })
    .catch(console.error);
  };

  // use incCardState to genorate event handlers for next and prev click events
  let handleNextClick = incCardState(1);
  let handlePrevClick = incCardState(-1);

  // save the note id on the drag event so we can get it on the drop event
  let onDragStart = (e) => e.dataTransfer.setData('text/plain', card._id);

  // each card will render its title and a delte button
  // it will only render next if the cards state is < 3
  // it will only render prev if the cards state is > 0
  // because the only valid states on the backend are 0,1,2,3 (backlog, ready, in-progress, done)
  return (
    <div onDragStart={onDragStart} draggable='true' key={card._id} className="card">
      <h3> {card.title} </h3>

      <button className="btn-delete" onClick={handleDeleteClick}> delete </button>
      {renderIf(card.state > 0,  
        <button className="btn-prev" onClick={handlePrevClick}> prev </button>)}

      {renderIf(card.state < 3, 
        <button className="btn-next" onClick={handleNextClick}> next </button>)}
    </div> 
  );
};

export default Card;



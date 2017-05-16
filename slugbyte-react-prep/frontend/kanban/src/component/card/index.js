'use strict';

import React from 'react';
import kanbanCard from '../../model/kanban-card.js';
import {check} from '../../lib/util.js';

const Card = ({state, setState, card}) => {
  let handleDeleteClick = () => {
    kanbanCard.delete(card)
    .then(() => {
      setState({
        kanbanCards: state.kanbanCards.filter(item => item._id !== card._id),
      });
    })
    .catch(console.error);
  };

  let incCardState = num => () => {
    card.state += num;
    kanbanCard.update(card)
    .then( card => {
      setState({cards: state.kanbanCards.map(item => {
        return (card._id == item._id ) ? card : item;
      })});
    })
    .catch(console.error);
  };

  let handleNextClick = incCardState(1);
  let handlePrevClick = incCardState(-1);

  // save the note id on the drag event so we can get it on the drop event
  let onDragStart = (e) => e.dataTransfer.setData('text/plain', card._id);

  return (
    <div onDragStart={onDragStart} draggable='true' key={card._id} className="card">
      <h3> {card.title} </h3>

      <button className="btn-delete" onClick={handleDeleteClick}> delete </button>
      {check(card.state > 0,  
        <button className="btn-prev" onClick={handlePrevClick}> prev </button>)}

      {check(card.state < 3, 
        <button className="btn-next" onClick={handleNextClick}> next </button>)}
    </div> 
  );
};

export default Card;



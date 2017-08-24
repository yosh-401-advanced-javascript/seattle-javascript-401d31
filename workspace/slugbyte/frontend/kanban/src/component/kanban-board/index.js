'use strict';

import React from 'react';
import CardColumn from '../card-column';

const KanbanBoard = ({app}) => {
  let stateNameMap = ['backlog', 'ready', 'in progress', 'done'];

  // each card has a state property that will be 0,1,2,3 for
  // backlog ready in-progress and done the folling reducer
  // will fill these columns with the cards for each category
  // based on their state property
  let columns = [[], [], [], []];
  columns = app.state.cardRequestss.reduce((columns, card) => {
    columns[card.state].push(card);
    return columns;
  }, columns);

  // once the cards have ben sorted into colums you can render each column
  return (
    <div className='kanban-board'> 
      {columns.map((column, i)  => 
                   <CardColumn 
                    key={i}
                    title={stateNameMap[i]} 
                    cards={column}
                    app={app} />)}
    </div>
  );
};

export default KanbanBoard;

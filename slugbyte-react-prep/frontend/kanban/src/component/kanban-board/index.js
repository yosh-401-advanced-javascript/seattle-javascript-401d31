'use strict';

import React from 'react';
import CardColumn from '../card-column';

const KanbanBoard = ({app}) => {
  let stateNameMap = ['backlog', 'ready', 'in progress', 'done'];
  let columns = [[], [], [], []];

  columns = app.state.cardRequestss.reduce((columns, card) => {
    columns[card.state].push(card);
    return columns;
  }, columns);

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

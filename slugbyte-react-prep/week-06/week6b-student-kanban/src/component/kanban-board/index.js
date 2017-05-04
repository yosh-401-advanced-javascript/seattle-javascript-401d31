'use strict';

import React from 'React';
import CardColumn from '../card-column';

const KanbanBoard = ({state, setState}) => {
  let stateNameMap = ['backlog', 'ready', 'in progress', 'done'];
  let columns = [[], [], [], []];

  state.kanbanCards.reduce((columns, card) => {
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
                    state={state}
                    setState={setState} />)}
    </div>
  );
};

export default KanbanBoard;

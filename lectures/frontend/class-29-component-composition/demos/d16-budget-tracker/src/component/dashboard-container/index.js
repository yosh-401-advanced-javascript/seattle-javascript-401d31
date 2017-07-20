import './_dashboard-container.scss'
import React from 'react'
import uuid from 'uuid/v1'

import Modal from '../modal'
import {renderIf} from '../../lib/util.js'
import ExpenseCreateForm from '../expense-create-form'

class DashboardContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      showModalError: true,
    }

    this.expenseCreate = this.expenseCreate.bind(this)
  }

  expenseCreate(expense){
    expense.id = uuid()
    console.log('type of pricse', typeof parseInt(expense.price))
    expense.price = parseInt(expense.price)
    this.props.app.setState( state => ({
      expenses: [...state.expenses, expense],
    }))
  }
  
  render(){
    let appState = this.props.app.state
    let totalSpent = appState.expenses
      .reduce((p, c) => p + c.price , 0)

    let remaining = appState.budget - totalSpent;

    return (
      <div className='dashboard-container'>
        {renderIf(remaining < 0 && this.state.showModalError, 
          <Modal onClose={() => this.setState({showModalError: false}) }>
            <h2> Budget Error </h2>
            <p> Your super broke </p>
            <p> current ballence ${remaining}</p>
          </Modal>
        )}

        <p> total spent {totalSpent} </p>
        <p> remaining {remaining} </p>
        <ExpenseCreateForm 
          handleExpenseCreate={this.expenseCreate} />

        <ul>
          {appState.expenses.map((item, i) => 
            <li key={i}>
              <p> {item.title}: {item.price} </p>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default DashboardContainer

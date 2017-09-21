import './_dashboard-container.scss'
import React from 'react'
import uuid from 'uuid/v1'

import Modal from '../modal'
import Navbar from '../navbar'
import ExpenseList from '../expense-list'
import ExpenseForm from '../expense-form'

let renderIf = (test, component) => test ? component : undefined

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      showErrors: true
    }

    this.expenseCreate = this.expenseCreate.bind(this)
    this.expenseRemove = this.expenseRemove.bind(this)
    this.expenseUpdate = this.expenseUpdate.bind(this)
  }

  expenseCreate(expense) {
    expense.id = uuid()
    this.props.app.setState(state => ({
      expenses: [...state.expenses, expense] 
    }))
  }

  expenseRemove(expense) {
    this.props.app.setState(prevState => ({
      expenses: prevState.expenses.filter(item => {
        return item.id !== expense.id
      })
    }))
  }

  expenseUpdate(expense) {
    this.props.app.setState(prevState => ({
      expenses: prevState.expenses.map(item => {
        return item.id === expense.id ? expense : item
      })
    }))
  }

  render() {
    let totalSpent = this.props.app.state.expenses.reduce((a, b) => a + b.price, 0)
    let remainingBudget = this.props.app.state.budget - totalSpent

    console.log('__STATE__', this.props.app.state)

    return (
      <section className='dashboard-container'>
        <Navbar />

        <div>
          <p>total budget: {this.props.app.state.budget}</p>
          <p>total spent: {totalSpent}</p>
          <p>remaining budget: {remainingBudget}</p>
        </div>

        <ExpenseForm 
          handleSubmit={this.expenseCreate}
          submitTitle='add expense'/>

        <ExpenseList 
          expenseRemove={this.expenseRemove}
          expenseUpdate={this.expenseUpdate}
          expenses={this.props.app.state.expenses}/>

        {renderIf(remainingBudget < 0 && this.state.showErrors,
          <Modal close={() => this.setState({ showErrors: false })}>
            <h1>sorry, you have used all of your available funds</h1>
            <p>current balance: {remainingBudget}</p>
          </Modal>
        )}
      </section>
    )
  }
}

export default DashboardContainer
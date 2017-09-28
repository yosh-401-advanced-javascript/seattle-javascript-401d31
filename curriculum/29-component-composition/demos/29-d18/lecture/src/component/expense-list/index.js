import React from 'react'
import ExpenseForm from '../expense-form'

class ExpenseList extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <section className="expense-list">
        <ul>
          {this.props.expenses.map(item => {
            return <li key={item.id}>
              <button onClick={() => this.props.expenseRemove(item)}>x</button>

              <div>
                <p>title: {item.title}</p>
                <p>price: {item.price}</p>
              </div>

              <ExpenseForm 
                expense={item}
                submitTitle='update expense'
                handleSubmit={expense => {
                  expense.id = item.id
                  this.props.expenseUpdate(expense)
                }}/>
            </li>
            }
          )}
        </ul>
      </section>
    )
  }
}

export default ExpenseList
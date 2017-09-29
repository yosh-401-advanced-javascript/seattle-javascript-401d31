import React from 'react'
import CreateForm from '../category-form'
import ExpenseForm from '../expense-form'

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryEdit: false,
      expenseEdit: false,
      expenseCreate: false,
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.toggleCategoryEdit = this.toggleCategoryEdit.bind(this)
    this.toggleExpenseCreate = this.toggleExpenseCreate.bind(this)
    this.toggleExpenseEdit = this.toggleExpenseEdit.bind(this)
  }

  handleDelete(e) {
    console.log(this.props)
  }

  toggleCategoryEdit() {
    this.setState({categoryEdit: !this.state.categoryEdit})
  }

  toggleExpenseCreate() {
    this.setState({expenseCreate: !this.state.expenseCreate})
  }
  
  toggleExpenseEdit() {
    this.setState({expenseEdit: !this.state.expenseEdit})
  }

  render() {
    return (
      <section onDoubleClick={this.toggleCategoryEdit}>
        {this.state.categoryEdit ? 
          <CreateForm 
            buttonText="update category"
            onComplete={this.props.actions.categoryUpdate}
            category={this.props.category}
            toggle={this.toggleCategoryEdit}/> :
          <div>
            <button onClick={this.handleDelete}>x</button>
            <button onClick={this.toggleExpenseCreate}>+ expense</button>
            <p>{this.props.category.name}: <span>{this.props.category.budget}</span></p>
            {this.state.expenseCreate ?
              <ExpenseForm
                onComplete={this.props.actions.expenseCreate}
                buttonText="create expense"
                category={this.props.category}
                toggle={this.toggleExpenseCreate}/> : 
              undefined  
            }

            {this.props.expenses.length ?
              <aside className="expense-list">
                <h3>Expenses</h3>
                {this.props.expenses.map(exp => 
                  <section key={exp.id}>
                    {!this.state.expenseEdit ? 
                      <div>
                        <button onClick={() => this.props.actions.expenseDelete(exp)}>x</button>
                        <button onClick={this.toggleExpenseEdit}>edit</button>
                        <p>{exp.name}: <span>{exp.price}</span></p>
                      </div> :
                      <ExpenseForm 
                        onComplete={this.props.actions.expenseUpdate}
                        buttonText="updated expense"
                        category={this.props.category}
                        expense={exp}
                        toggle={this.toggleExpenseEdit}/>
                    }
                  </section>)}
              </aside> :
              undefined
            }
          </div>
        }
      </section>
    )
  }
}

export default CategoryItem
import React from 'react'

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)

    let title = props.expense ? props.expense.title : ''
    let price = props.expense ? props.expense.price : 0

    this.state = { title, price }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let {name, value, type} = e.target

    if(type === 'number') {
      try {
        this.setState({
          [name]: parseInt(value)
        })
      } catch(e) {
        console.error(e)
      }
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render() {
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}/>
        
        <input 
          type="number"
          name="price"
          value={this.state.price}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.submitTitle}</button>
      </form>
    )
  }
}

export default ExpenseForm
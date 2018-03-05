import React from 'react';
import ResultList from './result-list'
import SearchForm from './search-form'
 
class FormContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      results: [],
      hasSearched: false,
      loading: false
    }

    this.search = this.search.bind(this)
  }

  search(searchFilter='') {
    this.setState({loading: true, hasSearched: true})
    setTimeout(() => {
      let newResults = [
          {language: 'python', rating: 8},
          {language: 'java', rating: 6},
          {language: 'javascript', rating: 9},
          {language: 'php', rating: 2},
      ].filter(result => {
        return result.language.includes(searchFilter)
      })
      this.setState({results: newResults, loading: false})
    }, 1000)
  }

  render() {
    return (
      <div>
        <SearchForm submitSearch={this.search} />
        <ResultList
          results={this.state.results}
          hasSearched={this.state.hasSearched}
          loading={this.state.loading} />
      </div>
    )
  }
} 

module.exports = FormContainer
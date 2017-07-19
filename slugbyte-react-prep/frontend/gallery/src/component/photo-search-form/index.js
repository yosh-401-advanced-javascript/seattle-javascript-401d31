'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {searchPhotosFetch, searchProfilesFetch} from '../../actions/search-actions.js';
import throttle from 'lodash.throttle';

class PhotoSearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: '',
    };

    this.fetchData = throttle(this.fetchData, 300);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    this.props.searchPhotosFetch({})
    this.props.searchProfilesFetch({})
  }

  fetchData(){
    console.log('this.props.searchBy', this.props.searchBy)
    if(this.props.searchBy == 'photo')
      this.props.searchPhotosFetch({description: this.state.searchText})
    else 
      this.props.searchProfilesFetch({username: this.state.searchText})
  }

  handleChange(e){
    let {target} = e;
    let {name, value} = target;
    this.setState({[name]: value});
    this.fetchData();
  }

  handleSubmit(e){
    e.preventDefault();
    this.fetchData();
  }

  render(){
    return (
      <form 
        className='photo-search-form'
        onSubmit={this.handleSubmit} >

        <input 
          type='text'
          placeholder='search'
          name='searchText'
          value={this.state.content}
          onChange={this.handleChange}
          />

      </form>
    );
  }
}

let mapStateToProps = state => ({})
let mapDispatchToProps = dispatch => ({
  searchPhotosFetch: query => dispatch(searchPhotosFetch(query)),
  searchProfilesFetch: query => dispatch(searchProfilesFetch(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhotoSearchForm);

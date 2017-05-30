'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {searchPhotosFetch, searchProfilesFetch} from '../../actions/search-actions.js';
import throttle from 'lodash.throttle';

class PhotoSearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: '',
      searchBy: 'photo'
    };

    this.fetchData = throttle(this.fetchData, 300);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchData(){
    if(this.state.searchBy == 'photo')
      this.props.searchPhotosFetch({description: this.state.description})
    else 
      console.log('fix me');
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
          name='description'
          value={this.state.content}
          onChange={this.handleChange}
          />

        <input
          type='radio'
          id='search-by-photo'
          value='photo'
          name='searchBy'
          onChange={this.handleChange}
          checked={this.state.searchBy === 'photo'}
          />
          <label htmlFor='search-by-photo'> photo </label>

        <input
          type='radio'
          id='search-by-profile'
          value='profile'
          name='searchBy'
          onChange={this.handleChange}
          checked={this.state.searchBy === 'profile'}
          />
          <label htmlFor='search-by-profile'> profile </label>
        

      </form>
    );
  }
}

let mapStateToProps = state => ({})
let mapDispatchToProps = dispatch => ({
  searchPhotosFetch: query => dispatch(searchPhotosFetch(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhotoSearchForm);

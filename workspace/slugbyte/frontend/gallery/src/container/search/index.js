'use strict';

import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../../component/navbar';
import PhotoSearchForm from '../../component/photo-search-form';
import PhotoCollection from '../../component/photo-collection';
import ProfileList from '../../component/profile-list';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchBy: 'photo',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let {target} = e;
    let {name, value} = target;
    this.setState({[name]: value});
  }

  render(){
    return (
      <div className='search-container'>
        <Navbar />
        <PhotoSearchForm searchBy={this.state.searchBy} />
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
        

          { 
            this.state.searchBy === 'photo' ?
            <PhotoCollection
              history={this.props.history} 
              photos={this.props.photos}/> : 
            <ProfileList 
              history={this.props.history} 
              profiles={this.props.profiles}/>
          }
      </div>
    );
  }
}

let mapStateToProps = state => ({
  photos: state.search.photos,
  profiles: state.search.profiles,
})
let mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

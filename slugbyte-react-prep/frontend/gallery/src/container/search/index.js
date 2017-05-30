'use strict';

import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../../component/navbar';
import PhotoSearchForm from '../../component/photo-search-form';
import PhotoCollection from '../../component/photo-collection';

class Search extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='search-container'>
        <Navbar />
        <PhotoSearchForm />

        <PhotoCollection
          history={this.props.history}
          photos={this.props.photos}/>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  photos: state.photos.search,
})
let mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

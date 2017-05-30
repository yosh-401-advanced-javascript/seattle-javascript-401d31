'use strict';

import React from 'react';
import {connect} from 'react-redux';

let PhotoCollection = ({history, photos}) => {
  console.log('photos', photos);
 
  let showImageDetail = (id) => {
    history.push(`/photo/${id}`);
  }

  return (
    <div className='photo-collection'>
      {photos.map(item => {
        return (
          <div 
            key={item._id} 
            onClick={() => showImageDetail(item._id)}
            className='photo-item'>
            <img src={item.photoURI} />
            <div className='info'>
              <p className='username'>@{item.profile.username} </p>
              <p className='description'> {item.description} </p>
            </div>
          </div>
        )
      })}
    </div>
  );
};


export default PhotoCollection;


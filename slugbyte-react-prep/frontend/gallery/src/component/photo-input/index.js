'use strict';

import React from 'react';
import {renderIf} from '../../lib/util.js';

let PhotoInput = ({name, value, onChange, preview}) => {
  return (
    <div className='photo-input' >
      <img src={preview} />
      {renderIf(!preview, <p> Drag and Drop or Select a Photo </p> )}
      <input 
        name={name}
        type='file'
        onChange={onChange}
        />
    </div>
  );
}

export default PhotoInput

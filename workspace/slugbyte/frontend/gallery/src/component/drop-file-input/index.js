'use strict'

import React from 'react'
import {fileToDataUrl, classToggler} from '../../lib/util.js';

class DropFileInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      preview: ''
    }

    this.handleDrop = this.handleDrop.bind(this);
    this.handleHange = this.handleHange.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this)
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.showImagePreview = this.showImagePreview.bind(this);
  }

  showImagePreview(file){
    fileToDataUrl(file)
    .then(preview => this.setState({preview}))
    .catch(preview => this.props({preview: ''}))
  }

  // required for drop event
  handleDragOver(e){
    e.preventDefault();
  }

  handleDragEnter(e){
    this.setState({dragover: true})
  }

  handleDragLeave(e){
    this.setState({dragover: false})
  }

  handleDrop(e){
    e.preventDefault()
    let file = e.dataTransfer.files[0];
    this.props.input.onChange(file);
    this.showImagePreview(file)
  }

  handleHange(e){
    console.log('e', e)
    let file = e.target.files[0];
    this.props.input.onChange(file);
    this.showImagePreview(file)
  }

  render(){
    return (
      <div
        className={classToggler({
            'file-drop-zone':true,
            dragover: this.state.dragover,
          })}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDrop={this.handleDrop}
        onDragOver={this.handleDragOver}
        > 

        <img src={this.state.preview}/>

        <input 
          type='file'
          onChange={this.handleHange}
          />
      </div>
    );
  }
}

export default DropFileInput;

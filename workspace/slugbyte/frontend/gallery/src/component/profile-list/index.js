'use strict';

import React from 'react'
import {connect} from 'react-redux';

class ProfileList extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(profile){
    this.props.history.push(`/profile/${profile.username}`)
  }

  render(){
    let {profiles} = this.props;

    return (
      <ul className='profile-list'>
        {profiles.map((item, i) => {
          return (
            <li 
              onClick={() => this.handleClick(item)}
              className='profile-list-item'>
              <div>
                <img src={item.photoURI} />
                <h3> @{item.username} </h3>
              </div>
            </li>
          )
        })}

      </ul>
    );
  }
}

let mapStateToProps = state => ({})
let mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(ProfileList)

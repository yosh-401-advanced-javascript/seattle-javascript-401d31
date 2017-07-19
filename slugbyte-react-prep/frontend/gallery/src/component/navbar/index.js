'use strict'

import './_navbar.scss';

import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {tokenSet} from '../../actions/auth-actions.js';
import {classToggler} from '../../lib/util.js';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showDropdown: false,
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  handleLogout(){
    delete localStorage.token
    this.props.tokenDelete()
    this.props.history.push('/')
  }

  toggleDropDown(){
    this.setState(state => ({
      showDropdown: !state.showDropdown,
    }));
  }

  render(){
    return (
      <header className='navbar'>
        <nav>
          <ul>
            <li className={classToggler({
              selected: location.pathname === '/dashboard',
            })}>
              <Link to='/dashboard'> Dashboard </Link>
            </li>
            <li className={classToggler({
              selected: location.pathname === '/search',
            })}>
              <Link to='/search'> Search </Link>
            </li>
          </ul>
        </nav>

        <div className='profile-icon'> 
          <img 
          onClick={this.toggleDropDown}
          src={this.props.profile.photoURI} />
          {this.state.showDropdown ? 
            <ul>
              <li><button
                onClick={this.handleLogout}
                className='btn logout'>
                logout
              </button></li>
              <li><button
                onClick={this.toggleDropDown}
                className='btn close'>
                close
              </button></li>
            </ul>
              : undefined }
        </div>
      </header>
    );
  }
}

let mapStateToProps = state => ({
  profile: state.userProfile,
});

let mapDispatchToProps = dispatch => ({
  tokenDelete: () => dispatch(tokenSet()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

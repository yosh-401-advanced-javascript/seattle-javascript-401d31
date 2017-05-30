'use strict'

import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {tokenSet} from '../../actions/auth-actions.js';

let Navbar = ({history, tokenDelete}) => {
  let handleLogout = () => {
    delete localStorage.token
    tokenDelete()
    history.push('/')
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/dashboard'> Dashboard </Link>
          </li>
          <li>
            <Link to='/search'> Search </Link>
          </li>
        </ul>
      </nav>
      
      <button
        onClick={handleLogout}
        className='btn logout'>
        logout
      </button>
    </header>
  );
};

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
  tokenDelete: () => dispatch(tokenSet()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

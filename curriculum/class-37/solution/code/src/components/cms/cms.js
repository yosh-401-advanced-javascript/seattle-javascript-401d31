import React from 'react';

import * as actions from './actions.js';

import Login from '../auth/login.js';
import Auth from '../auth/auth.js';
import Record from './record.js';
import Models from './models.js';
import Records from './records.js';

export default class CMS extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <header>
          <Login />
        </header>

        <nav>
          <Models />
        </nav>

        <section>
          <Records />
        </section>

        <section>
          <Record />
        </section>
      </>
    );
  }
}

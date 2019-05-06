import React from 'react';

import * as actions from './actions.js';

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
          <nav>
            <Models />
          </nav>
        </header>

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

import React from 'react';

import Auth from '../auth/auth.js';
import { TodoContext } from '../todo/context.js';

class Content extends React.Component {
  static contextType = TodoContext;

  render() {
    return (
      <Auth>
        <div>
          <h2>There are {this.context.count} items in the list</h2>
        </div>
      </Auth>
    );
  }
}

export default Content;

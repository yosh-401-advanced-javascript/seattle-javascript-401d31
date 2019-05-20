import React from 'react';

import EditorWithStaticContext from './static-context.js';
import EditorWithConsumerContext from './consumer-context.js';

import './editor.scss';

class Content extends React.Component {

  render() {
    return (
      <>
        <h2>Static Context</h2>
        <EditorWithStaticContext/>
        <hr />
        <h2>Consumer Context</h2>
        <EditorWithConsumerContext/>
      </>
    );
  }
}

export default Content;

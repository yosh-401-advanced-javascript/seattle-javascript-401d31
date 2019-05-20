import React from 'react';

import {useChat} from './chat-hook.js';

const App = props => {

  const [words,setWords] = useChat();

  const handleSubmit = event => {
    event.preventDefault();
    setWords(event.target.elements.words.value);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="words" placeholder="New Words" />
    </form>
  );
};

export default App;

import React from 'react';

import {useChat} from './chat-hook.js';

const Words = props => {
  const [words] = useChat();
  return <h2>{words}</h2>;
};

export default Words;

import React from 'react';
import { useStore } from 'react-hookstore';

function Content() {
  const [timesClicked] = useStore('clickStore');

  return (
    <div>
      <h1>{timesClicked}</h1>
    </div>
  );
}

export default Content;

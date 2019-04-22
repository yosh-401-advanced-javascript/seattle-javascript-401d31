import React from 'react';
import { useStore } from 'react-hookstore';

function Counter() {
  const [timesClicked, setClicks] = useStore('clickStore');

  return (
    <div>
      <button type="button" onClick={() => setClicks(timesClicked + 1)}>
        Update
      </button>
    </div>
  );
}

export default Counter;

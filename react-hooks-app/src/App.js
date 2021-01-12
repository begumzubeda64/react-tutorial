import { useState } from 'react';
import './App.css';
import React from 'react';

const Counter = (props) => {
  const [ count, setCount ] = useState(() => 0);

  return (
    <>
      <button onClick={() => setCount(x => x + 1)}>++</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(x => x - 1)}>--</button> <br />
      {count}
    </>
  )

}

export default Counter;


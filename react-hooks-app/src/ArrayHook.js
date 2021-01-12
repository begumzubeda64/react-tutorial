import { useState } from 'react';
import React from 'react';

const ArrayHook = (props) => {
  const [ data, setData ] = useState([]);
  const [ value, setValue ] = useState('');

  const updateData = () => {
    setData(data => [...data, {
        id: '1',
        value: value,
    }]);
  }

  return (
    <>
        <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
        <button onClick={updateData}>Update</button>
        {data.map((i, index) => {
            return <li key={index}>{i.value}</li>
        })}
    </>
  )

}

export default ArrayHook;


import React from 'react';
import useCounter from './react-use-counter';

const App = () => {
    const [ count, increment ] = useCounter(0);

    return (
        <div>
            <h4>You clicked {count} times.</h4>
            <button onClick={increment}>Click me!</button>
        </div>
    )
}

export default App;
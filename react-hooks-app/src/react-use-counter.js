import { useState } from 'react';

const useCounter = (initialState = 0) => {
    const [ state, setState ] = useState(initialState);
    const increment = () => {
        setState(state => state + 1);
    }
    return [ state, increment ];
}

export default useCounter;
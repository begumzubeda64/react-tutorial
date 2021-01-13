import React, { useContext,  useReducer } from 'react';
import{ sharedContext } from './context';

const initialState = { count: 0 };
const reducer = (state, action) => {
    switch(action.type){
        case 'increment': return { ...state, count: state.count + 1};
        case 'decrement': return { ...state, count: state.count - 1};
        default: throw new Error("Unexpected Action!");
    }
}

const Parent = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    
    return (
        <sharedContext.Provider value={[state, dispatch]}>
            <Counter />
        </sharedContext.Provider>
    );
}

const Counter = () => {
    const [state, dispatch] = useContext(sharedContext);
    
    return (
        <>
            <h5>Count: {state.count}</h5>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        </>
    );
}

export default Parent;
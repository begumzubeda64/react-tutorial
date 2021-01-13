import React, { useReducer } from 'react';

const Counter = () => {
    const [ count1, dispatch1 ] = useReducer(reducer, initialState);
    const [ count2, dispatch2 ] = useReducer(reducer, initialState);

    return (
        <div>
            <h5>{count1}</h5>
            <button onClick={() => dispatch1({type: 'increment'})}>Inc</button>
            <button onClick={() => dispatch1({type: 'decrement'})}>Dec</button>
            <button onClick={() => dispatch1({type: 'reset', count: 0})}>Res</button>
            <h5>{count2}</h5>
            <button onClick={() => dispatch2({type: 'increment'})}>Inc</button>
            <button onClick={() => dispatch2({type: 'decrement'})}>Dec</button>
            <button onClick={() => dispatch2({type: 'reset', count: 0})}>Res</button>
        </div>
    )
}

const initialState = 0;
const reducer = (state, action) => {
    switch(action.type){
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        case 'reset': return action.count;
        default: throw new Error("Unexpected Action!");
    }
}

export default Counter;
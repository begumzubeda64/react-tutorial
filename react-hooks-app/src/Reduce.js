import React, { useReducer } from 'react';

const Hello = () => {
    const [ count, dispatch ] = useReducer(reducer, initialState); 
    const [ user, udispatch ] = useReducer(oreducer, initState);
    return (
        <div>
            <button onClick={() => dispatch('increment')}>Increament count</button>
            <button onClick={() => dispatch('decrement')}>Decreament count</button>
            <button onClick={() => dispatch('reset')}>Reset count</button>
            <h5>{count}</h5>
            <button onClick={() => udispatch('addname')}>Add name</button>
            <button onClick={() => udispatch('addemail')}>Add email</button>
            <button onClick={() => udispatch('nothing')}>Reset</button>
            <h3>Name: {user.name}, Email: {user.email}</h3>
            
        </div>
    )
}

const initState = {
    name: '',
    email: ''
}
const oreducer = (state, action) => {
    switch(action){
        case 'addname': return {...state, name: 'Zubeda'};
        case 'addemail': return {...state, email: 'zub@gm.com'};
        case 'nothing': return initState;
        default: throw Error("Unexpected Action!");
    }
}

const initialState = 0;
const reducer = (state, action) => {
    switch(action){
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        case 'reset': return 0;
        default: throw Error("Unexpected Action!");
    }
}

export default Hello;
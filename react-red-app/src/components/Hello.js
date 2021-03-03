import React from 'react';

const Hello = ({ onClick, message }) => {
    return (
        <>
            <h1>{ message }</h1>
            <button onClick={onClick}>Click</button>
        </>
    )
}

export default Hello;
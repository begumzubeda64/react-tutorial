import React, { useEffect, useState } from 'react';

const Top = () => {
    const [ count, setCount ] = useState(0);
    useEffect(() => {
        console.log('Top rendered...');
    }); //if want to use set state then mention dependency

    return (
        <div>
            <div onClick = {() => setCount(count + 1)}>Top level {count}</div>
            <Middle />
        </div>
    )
}

const Middle = () => {
    const [ count, setCount ] = useState(0);
    useEffect(() => {
        console.log('Middle rendered...');
    }); //if want to use set state then mention dependency

    return (
        <div>
            <div onClick = {() => setCount(count + 1)}>Middle level {count}</div>
            <Bottom />
        </div>
    )
}

const Bottom = () => {
    const [ count, setCount ] = useState(0);
    useEffect(() => {
        console.log('Bottom rendered...');
    }); //if want to use set state then mention dependency

    return (
        <div>
            <div onClick = {() => setCount(count + 1)}>Bottom level {count}</div>
        </div>
    )
}

export default Top;


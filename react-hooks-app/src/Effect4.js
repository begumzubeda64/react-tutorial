import React, { useEffect, useState } from 'react';

const PropChangeWatch = ({a, b}) => {
    useEffect(() => {
        console.log(`Value of a & b changed to ${a}, ${b}`);
    }, [a, b]);

    return (
        <div>
            I've got 2 props: a={a} b={b}.
        </div>
    )
}

const Demo = () => {
    const [ count1, setCount1 ] = useState(0);
    const [ count2, setCount2 ] = useState(0);

    return (
        <>
            <PropChangeWatch a={count1} b={count2} />
            <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
            <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
        </>
    )
}

export default Demo;
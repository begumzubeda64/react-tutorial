import React, { useMemo, useState } from 'react';

const App = () => {
    const [a, setA] = useState([9,8,7,5,8]);
    const expenseop = (a) => {
        let sum = 0
        for(let i = 0; i < a.length; i ++){
            sum = sum + a[i];
            
        }
        return sum;
    }

    //useEffect takes each object or array as different hence re render even if not change
    const memonized = useMemo(() => expenseop(a), [a]); //cache dependency values (used mainly when array or obj)

    return (
        <>
            <ul>
                {a && a.map((i, index) => {
                    return <li key={index}>{i}</li>
                })}
            </ul>
            <h1>Sum: {memonized}</h1>
            <button onClick={() => setA([1,8,7,3,4,5])}>Change</button>
        </>
    );
   
}

export default App;
import React, { useEffect, useState } from 'react';

const Effect1 = () => {
    const [ data, setData ] = useState([]);
    const [ filterList, setfilterList ] = useState([]); 
    const [ key, setKey ] = useState('');

    async function getData(){ //use for api call
        const res = await fetch(`https://restcountries.eu/rest/v2/all`);
        const result = await res.json();
        setData(result);
        setfilterList(result)
    }

    useEffect(() => { 
        getData();
        return () => null; 
    }, []); 

    useEffect(() => { 
        const list = data.filter(i => 
            i.name.toLowerCase().includes(key.toLowerCase())
        );
        setfilterList(list);
        return () => null; 
    }, [key]); 

    return (
        <div>
            <input type="text" onChange={(e) => setKey(e.target.value)} value={key} />
            <ul>
            {filterList && filterList.map((i, index) => {
                return <li key={index}>{i.name}</li>
            })}
            </ul>
        </div>
    )
}

export default Effect1;
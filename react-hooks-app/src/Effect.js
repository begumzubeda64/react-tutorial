import React, { useEffect, useState } from 'react';

const Effect = () => {
    const [ fullName, setfullName ] = useState({name: 'name', familyName: 'family'});
    const [ data, setData ] = useState([]);
    const [ key, setKey ] = useState('');

    async function getData(key){ //use for api call
        const res = [{roll: 1, name: 'Carol'}, {roll: 2, name: 'Steve'}];
        const result = await res.filter(i => {
            return i.name.toLowerCase().match(key.toLowerCase());
        });
        setData(result);
    }

    useEffect(() => { //componentDidMount, componentDidUpdate
        setfullName({name: 'Zubu', familyName: 'Abbas'});
        if(key && key.length >= 2){
            getData(key);
        } 
        else{
            setData([]);
        }
        return () => null; //componentWillUnmount -- unsubscription to service Eg. addListener == removeListener
    }, [key]); //dependency list -- will check it when update new

    return (
        <div>
            <input type="text" onChange={(e) => setKey(e.target.value)} value={key} />
            <h6>{key}</h6>
            <h3>Name: {fullName.name}</h3>
            <h3>Family Name: {fullName.familyName}</h3>
            {data && data.map((i, index) => {
                return <li key={index}>{i.roll}:{i.name}</li>
            })}
        </div>
    )
}

export default Effect;
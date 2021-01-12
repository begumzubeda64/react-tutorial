import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Effect2 = () => {
    const [ countries, setCountries ] = useState([]);
    const [ load, setLoad ] = useState(false);
    const [ error, setError ] = useState('');

    useEffect(() => { 
        axios.get(`https://restcountries.eu/rest/v2/all`)
        .then(res => {
            setCountries(res.data);
            setLoad(true);
        })
        .catch(err => {
            setError(err.message);
            setLoad(true);
        })
        return () => null; 
    }, []); 

    if(load){
        return (
            <ul>
                {error ? <li>{error}</li> : 
                countries && countries.map((country, index) => {
                    return <li key={index}>{country.name}</li>
                })
                }
            </ul>
        )
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }
    
}

export default Effect2;
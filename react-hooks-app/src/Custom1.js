import React, { useEffect, useState } from 'react';
import useAxios from './react-use-axios';
import axios from 'axios';

const App = () => {
    const [ data, setData ] = useState([]);

    const { response, isLoading, error } = useAxios({
        api: axios,
        method: 'get',
        url: 'https://restcountries.eu/rest/v2/all'
    });
    
    useEffect(() => {
        if(response !== null){
            setData(response);
        }
        
    }, [response]);

    if(!isLoading){
        return (
            <ul>
                {error ? <li>{error}</li> : 
                data && data.map((country, index) => {
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

export default App;
import { useEffect, useState } from 'react';

const useFetch = ({url, options}) => {
    const [ response, setResponse ] = useState(null);
    const [ error, setError ] = useState("");
    const [ isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
                setIsLoading(false);
            }
            catch(err){
                setError(err);
                setResponse(null);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url, options]);

    return { response, error, isLoading };
}

export default useFetch;
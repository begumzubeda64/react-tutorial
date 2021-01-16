import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './item';

const TitleList = ({title, url}) => {
    const [ data, setData ] = useState([]);
    const[ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        loadContent(url);
        return () => null;
    }, [url]);

    const loadContent = (url) => {
        const apiKey = '87dfa1c669eea853da609d4968d294be';
		axios.get('https://api.themoviedb.org/3/' + url + '&api_key=' + apiKey)
        .then((data) => {
            setData(data.data);
            setLoaded(true);
        }).catch(err => {
            console.error(err.toString());
            setLoaded(true);
        });
    }
    if(data.results) {
        var items = data.results.splice(0,5).map(function(item) {
            let backDrop = 'http://image.tmdb.org/t/p/original' + item.backdrop_path;
            
            return (
                <Item key={item.id} title={item.original_name ? item.original_name : item.original_title} score={item.vote_average} overview={item.overview} backdrop={backDrop} />
            );	
        });	

    } else {
        items = '';
    }
    return (
        <div className="TitleList" data-loaded={loaded}>
            <div className="Title">
                <h1>{title}</h1>
                <div className="titles-wrapper">
                    {items}
                </div>
            </div>
        </div>
    );
    
    

}

export default TitleList;
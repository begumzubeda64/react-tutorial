import React from 'react';
import Item from '../item';

const SearchResult = ({data}) => {
    if(data.results) {
        var itemsData = data.results.splice(0,5).map(function(item) {
            let backDrop = 'http://image.tmdb.org/t/p/original' + item.backdrop_path;
            
            return (
                <Item key={item.id} title={item.original_name ? item.original_name : item.original_title} score={item.vote_average} overview={item.overview} backdrop={backDrop} />
            );	
        });	

    } else {
        itemsData = '';
    }
    return (
        <div className="TitleList" data-loaded={true}>
            <div className="Title">
                <h1>Search results</h1>
                <div className="titles-wrapper">
                    {itemsData}
                </div>
            </div>
        </div>
    );
}

export default SearchResult;
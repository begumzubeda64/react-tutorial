import React from 'react';
import './search.scss';

const SearchBar = ({searchValue, searchTermChanged, search, engine,engineChanged}) => {
    return (
        <div className="search">
            <label htmlFor="search-input">Search Images</label>
            <input id="search-input" type="text" placeholder="Enter search term.."
                value={searchValue} 
                onChange={searchTermChanged}
                onKeyPress={event => {
                    if(event.key === "Enter"){
                        search()
                    }
                }} 
            />
            <select 
                value={engine}
                onChange={engineChanged} >
                <option value="flicker">Flickr</option>
                <option value="giphy">Giphy</option>
            </select>
            <input onClick={search} type="submit" value="Search" />
        </div>
    )
}

export default SearchBar;
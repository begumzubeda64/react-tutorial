import React, { useState } from 'react';

const Search = ({onSubmit}) => {
    const [ value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onSubmit(value);
    }

    return (
        <form onSubmit={handleSubmit} id="search" className="Search">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search..." />
        </form>
    )
}

export default Search;
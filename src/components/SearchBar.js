import React from 'react'

const SearchBar = ({keyword, setKeyword}) => {
    return (
        <div className="container-search">
            <label>Search: </label>
            <input value={keyword} placeholder="Enter Site ID" 
            onChange={(e) => setKeyword(e.target.value)} />
        </div>
    )
}

export default SearchBar

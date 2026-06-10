import React from "react";

function SearchBar({name, onChange}){
    return(
        <input 
            className="search-bar"
            type="text"
            placeholder="Search..."
            value={name}
            onChange={onChange}
        />
    )
}

export default SearchBar 
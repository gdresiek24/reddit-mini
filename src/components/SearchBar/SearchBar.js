import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return(
        <form className="SearchBar" onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder="Search"
                value={searchTerm}
                onChange={handleInputChange}
            />
            {/* <button type='submit' >Submit</button> */}
        </form>
    );
};

export default SearchBar;
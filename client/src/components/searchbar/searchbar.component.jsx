import React from "react";
import { useState } from "react";
import './searchbar.css'

export default function SearchBar({onSearch}){

    const [country, setCountry] = useState('');

    function onSubmit(e){
        if(!country){
            alert('Please enter a valid country')
        }
        onSearch(country)
        setCountry('')
    }

    return(
        <div className="search-bar">
            <input type="text" className="search-text" placeholder="Search country..." value={country} onChange={e => setCountry(e.target.value)} />
            <span className="icon" onClick={(e) => onSubmit(e)} ><i className="fa fa-search"></i></span>
        </div>
    )
}
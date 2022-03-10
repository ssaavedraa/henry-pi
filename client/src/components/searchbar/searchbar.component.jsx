import axios from "axios";
import React from "react";
import { useState } from "react";

import './searchbar.css'

export default function SearchBar(){

    const [country, setCountry] = useState('');

    async function onSearch(e){
        if(!country){
            alert('Please enter a valid country')
        }
        let response = await axios.get(`/countries?name=${country}`)
        window.location.replace(`/country/${response.data[0].id}`)
        setCountry('')
    }


    return(
        <div className="search-bar">
            <input type="text" className="search-text" placeholder="Search country..." value={country} onChange={e => setCountry(e.target.value)} />
            <span className="icon" onClick={(e) => onSearch(e)} ><i className="fa fa-search"></i></span>
        </div>
    )
}
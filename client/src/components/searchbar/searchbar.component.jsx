import React from "react";
import './searchbar.css'

export default function SearchBar(){
    return(
        <div className="search-bar">
            <input type="text" className="search-text" placeholder="Search country..." />
            <span className="icon"><i className="fa fa-search"></i></span>
        </div>
    )
}
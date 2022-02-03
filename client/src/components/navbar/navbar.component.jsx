import React from "react";
import {Link} from 'react-router-dom'
import SearchBar from "../searchbar/searchbar.component";
import './navbar.css'

export default function Nav(){
    return(
        <div className="nav-container">
            <Link to='/home' style={{textDecoration: 'none'}}>
                <h1 className="nav-link">Countries</h1>
            </Link>
            <SearchBar />
        </div>
    )
}
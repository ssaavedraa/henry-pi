import React from "react";
import { Link } from "react-router-dom";
import './activity.css'

export default function Activity(){

    return(
        <Link to={'/activity/create'} style={{textDecoration: 'none'}}>
            <div className="activity-card">
                    <h1>+</h1>
            </div>
        </Link>
    )
}
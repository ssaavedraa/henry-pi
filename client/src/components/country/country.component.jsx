import React from "react";
import './country.css';

export default function Country({id, name, img, continent}){

    const background ={
        background : `url(${img}) `,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center'
    }

    return(
        <div className="country-card" style={background} >
            <div className="country-text">
                <h1>{name}, {id}</h1>
                <h2>{continent}</h2>
            </div>
        </div>
    )

}
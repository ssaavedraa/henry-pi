import React from "react";
import img from '../../assets/img/firma.png'
import './footer.css'

export default function Footer(){

    return(
        <div className="footer">
            <img src={img} alt="footer" />
            <p>Developed & designed by.</p>
        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";
import sign from '../../assets/img/firma.png'
import './landing-page.css'

function Landing(){
    return(
        <div className="container">
            <div className="welcome">
                <h1 className="title">Welcome to our planet</h1>
                <Link to='/home'><h3 className="button">Lets explore!</h3></Link>
            </div>
            <img src="https://hdwallpaperim.com/wp-content/uploads/2017/08/22/444627-space-Earth.jpg" alt="Earth" />
            <img src={sign} alt="sign" id="sign" />
        </div>
    )
}

export default Landing;
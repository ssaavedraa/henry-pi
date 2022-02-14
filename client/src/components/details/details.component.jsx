import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountry } from "../../redux/actions/actions";
import Nav from "../navbar/navbar.component";
import './details.css'
import { useParams } from "react-router-dom";
import Activity from "../activity/activity.component";

export default function Details(){

    const {countryId} = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountry(countryId))
    },[dispatch])

    const country = useSelector((state) => state.country)
    console.log(country)

    return(
        <div className="details-container">
            <Nav />
            <div className="grid-container">
                <div className="country-info">
                    <h1 className="country-name">{country.name}, {country.id}</h1>
                    <div className="country-details">
                        <div className="country-flag">
                            <img src={country.img} alt="flag not found"/>
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe width="100%" height="100%" id="gmap_canvas" src={`https://maps.google.com/maps?q=${country.name}&t=&z=5&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="map"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="details">
                            <ul>
                                <li>Continent: {country.continent}</li>
                                <li>Subregion: {country.subregion}</li>
                                <li>Capital: {country.capital}</li>
                                <li>Area: {Intl.NumberFormat('en-US').format(country.area)} Km&sup2;</li>
                                <li>Population: {Intl.NumberFormat('en-US').format(country.population)} habitants </li>
                            </ul>
                            <Activity activities={country.activities}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
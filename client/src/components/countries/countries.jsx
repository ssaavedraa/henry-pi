import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getAllCountries } from "../../redux/actions/actions";
import Country from "../country/country.component";
import Filter from "../filter/filter.component";
import Nav from "../navbar/navbar.component";
import Paging from "../paging/paging.component";
import './countries.css'

export default function Countries(){

    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const indexLastCountry = currentPage * countriesPerPage
    const indexFirstCountry = indexLastCountry - countriesPerPage
    const currentCountries = allCountries.slice(indexFirstCountry, indexLastCountry)

    const paging = (pageNumber) => {
        setCurrentPage(pageNumber + 1)
    }

    useEffect (() => {
        dispatch(getAllCountries());
    },[dispatch])

    return(
        <div className="main-container">
            <Nav/>
            <div className="grid-container">
                <div className="filter">
                    <Filter />
                </div>
                <div className="cards">
                    {
                       currentCountries && currentCountries.map(country => {
                           return <Country
                            key={country.id}
                            id={country.id}
                            name={country.name}
                            img={country.img}
                            continent={country.continent}
                           />
                       })
                    }
                </div>
                <div className="paging">
                    <Paging
                        countriesPerPage={countriesPerPage}
                        allCountries={allCountries.length}
                        paging={paging}
                    />
                </div>
            </div>
        </div>
    )

}
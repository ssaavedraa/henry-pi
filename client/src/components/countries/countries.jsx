import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import { getAllCountries, filterByContinent, sortCountries, sortPopulation } from "../../redux/actions/actions";
import Country from "../country/country.component";
import Filter from "../filter/filter.component";
import Footer from "../footer/footer.component";
import Nav from "../navbar/navbar.component";
import Paging from "../paging/paging.component";
import './countries.css'

export default function Countries(){

    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const [sortName, setSortName] = useState('')
    const indexLastCountry = currentPage * countriesPerPage
    const indexFirstCountry = indexLastCountry - countriesPerPage
    const currentCountries = allCountries.slice(indexFirstCountry, indexLastCountry)

    const paging = (pageNumber) => {
        setCurrentPage(pageNumber + 1)
    }

    const handleContinentFilter = (value) => {
        dispatch(filterByContinent(value))
        setCurrentPage(1)
    }

    const handleSortingCountries = (value) => {
        dispatch(sortCountries(value))
        setCurrentPage(1)
        setSortName(`Sorted ${value}`)
    }

    const handleSortingPopulation = (value) => {
        dispatch(sortPopulation(value))
        setCurrentPage(1)
        setSortName(`Sorted ${value}`)
    }

    useEffect (() => {
        dispatch(getAllCountries());
    },[dispatch])

    return(
        <div className="main-container">
            <Nav />
            <div className="grid-container">
                <div className="filters">
                    <Filter  handleContinentFilter={handleContinentFilter} handleSortingCountries={handleSortingCountries} handleSortingPopulation={handleSortingPopulation}
                    />
                </div>
                <div className="cards">
                    {
                       currentCountries && currentCountries.map(country => {
                          return <Link to={`/country/${country.id.toLowerCase()}`} style={{textDecoration: 'none'}} key={country.id}>
                            <Country
                                id={country.id}
                                name={country.name}
                                img={country.img}
                                continent={country.continent}
                            />
                           </Link>
                       })
                    }
                </div>
                <div className="paging">
                    <Paging
                        countriesPerPage={countriesPerPage}
                        allCountries={allCountries.length}
                        paging={paging}
                        currentPage={currentPage}
                    />
                </div>
                <Footer />
            </div>
        </div>
    )

}
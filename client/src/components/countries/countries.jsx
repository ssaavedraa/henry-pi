import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getAllCountries, filterByContinent, sortCountries, sortPopulation, getCountry } from "../../redux/actions/actions";
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

    const onSearch = (name) => {
        dispatch(getCountry(name, dispatch))
    }

    useEffect (() => {
        dispatch(getAllCountries());
    },[dispatch])

    return(
        <div className="main-container">
            <Nav onSearch={onSearch} />
            <div className="grid-container">
                <div className="filter">
                    <Filter  handleContinentFilter={handleContinentFilter} handleSortingCountries={handleSortingCountries} handleSortingPopulation={handleSortingPopulation}/>
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
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    )

}
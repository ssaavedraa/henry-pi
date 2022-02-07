import React from "react";
import './filter.css'

export default function Filter({handleContinentFilter, handleSortingCountries, handleSortingPopulation}){

    return(
        <div className="filter-container">
                <input type="checkbox" name="filter-btn" id="filter-btn" />
            <div className="filter">
                <div className="filter-title">
                    <label htmlFor="filter-btn"><h1>Apply filters</h1></label>
                    <label htmlFor="filter-btn"><h1><i className="fa fa-filter" /></h1></label>
                </div>
                <div className="filter-content" id="sort">
                    <h2>Sort by country name</h2>
                    <label htmlFor="az-radio" className="radio-label" onChange={(e) => handleSortingCountries(e.target.value)} >
                        <input type="radio" name="sort-radio" id="az-radio" className="input-radio" value='az' />
                        <div className="radio"></div>
                        A-Z
                    </label>
                    <label htmlFor="za-radio" className="radio-label" onChange={(e) => handleSortingCountries(e.target.value)} >
                        <input type="radio" name="sort-radio" id="za-radio" className="input-radio" value='za' />
                        <div className="radio"></div>
                        Z-A
                    </label>
                </div>
                <div className="filter-content" id="sort">
                    <h2>Sort by country population</h2>
                    <label htmlFor="asc-radio" className="radio-label" onChange={(e) => handleSortingPopulation(e.target.value)} >
                        <input type="radio" name="sort-radio" id="asc-radio" className="input-radio" value='asc' />
                        <div className="radio"></div>
                        Ascedent
                    </label>
                    <label htmlFor="desc-radio" className="radio-label" onChange={(e) => handleSortingPopulation(e.target.value)} >
                        <input type="radio" name="sort-radio" id="desc-radio" className="input-radio" value='desc' />
                        <div className="radio"></div>
                        Descendent
                    </label>
                </div>
                <div className="filter-content" id="filter-continent">
                    <h2>Filter by continent</h2>
                    <label htmlFor="america" className="radio-label" onChange={(e) => handleContinentFilter(e.target.value)}>
                        <input type="radio" name="continent-radio" id="america" value='america' className="input-radio" />
                        <div className="radio"></div>
                        America
                    </label>
                    <label htmlFor="europe" className="radio-label" onChange={(e) => handleContinentFilter(e.target.value)}>
                        <input type="radio" name="continent-radio" id="europe" value='europe' className="input-radio" />
                        <div className="radio"></div>
                        Europe
                    </label>
                    <label htmlFor="africa" className="radio-label" onChange={(e) => handleContinentFilter(e.target.value)}>
                        <input type="radio" name="continent-radio" id="africa" value='africa' className="input-radio" />
                        <div className="radio"></div>
                        Africa
                    </label>
                    <label htmlFor="asia" className="radio-label" onChange={(e) => handleContinentFilter(e.target.value)}>
                        <input type="radio" name="continent-radio" id="asia" value='asia' className="input-radio" />
                        <div className="radio"></div>
                        Asia
                    </label>
                    <label htmlFor="oceania" className="radio-label" onChange={(e) => handleContinentFilter(e.target.value)}>
                        <input type="radio" name="continent-radio" id="oceania" value='oceania' className="input-radio" />
                        <div className="radio"></div>
                        Oceania
                    </label>
                    <label htmlFor="all" className="radio-label" onChange={(e) => handleContinentFilter(e.target.value)}>
                        <input type="radio" name="continent-radio" id="all" value='' className="input-radio" defaultChecked/>
                        <div className="radio"></div>
                        All
                    </label>
                </div>
                <div className="filter-content" id="filter-season">
                    <h2>Filter by activity season</h2>
                    <label htmlFor="summer" className="radio-label">
                        <input type="radio" name="season-radio" id="summer" value='summer' className="input-radio" />
                        <div className="radio"></div>
                        Summer
                    </label>
                    <label htmlFor="autumm" className="radio-label">
                        <input type="radio" name="season-radio" id="autumm" value='autumm' className="input-radio" />
                        <div className="radio"></div>
                        Autumm
                    </label>
                    <label htmlFor="winter" className="radio-label">
                        <input type="radio" name="season-radio" id="winter" value='winter' className="input-radio" />
                        <div className="radio"></div>
                        Winter
                    </label>
                    <label htmlFor="spring" className="radio-label">
                        <input type="radio" name="season-radio" id="spring" value='spring' className="input-radio" />
                        <div className="radio"></div>
                        Spring
                    </label>
                </div>
            </div>
        </div>
    )
}
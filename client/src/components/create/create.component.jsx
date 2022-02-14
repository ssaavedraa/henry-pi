import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, filterByContinent, sortCountries } from "../../redux/actions/actions";
import axios from "axios";
import Nav from "../navbar/navbar.component";
import './create.css'

export default function Create(){

    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)

    const [continent, setContinent] = useState('')
    const [selectedCountries, setSelectedCountries] = useState([])
    const [difficulty, setDifficulty] = useState(0);

    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch]);

    function activityDurationFormat(e){

        let time = e.target.value
        const numbers=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

        if(!time){
            document.getElementById('duration').style.setProperty("border", "solid 4px #dc3545")
        }else{
            document.getElementById('duration').style.setProperty("border", "none")
        }

        for(let character in time){
            if(numbers.includes(time[character]) || time[character] === ':'){
                if(time.length <= 5 ){
                    if(time.length === 2){
                        e.target.value = time + ':'
                    }
                }
                else e.target.value = time.slice(0, -1)
            }
            else e.target.value = time.slice(0, -1)
        }
    }

    const handleContinentFilter = (value) => {
        dispatch(filterByContinent(value))
        dispatch(sortCountries('az'))
        setContinent(value)
    }

    const postActivity = async (payload) => {
        console.log(payload)
        const response = await axios.post('http://localhost:3001/activity', payload)
        console.log(response)
    }

    const dataValidation = (name, duration, difficulty, season, selectedCountries) => {

        let flags = []

        if(!name)document.getElementById('name').style.setProperty("border", "solid 4px #dc3545")
        else {document.getElementById('name').style.setProperty("border", "none"); flags.push(1)}

        if(!duration || duration.value === ':') document.getElementById('duration').style.setProperty("border", "solid 4px #dc3545")
        else {document.getElementById('duration').style.setProperty("border", "none"); flags.push(1)}

        if(difficulty === 0) document.getElementById('difficulty').style.setProperty("border", "solid 4px #dc3545")
        else {document.getElementById('difficulty').style.setProperty("border", "none"); flags.push(1)}

        if(season === '- Pick one -') document.getElementById('season').style.setProperty("border", "solid 4px #dc3545")
        else {document.getElementById('season').style.setProperty("border", "none"); flags.push(1)}

        if(selectedCountries.length === 0) document.getElementById('country').style.setProperty("border", "solid 4px #dc3545")
        else {document.getElementById('country').style.setProperty("border", "none"); flags.push(1)}

        if(flags.length === 5) return true
        else return false
    }

    const addCountry = (country) => {
        let countries = [...selectedCountries]
        document.getElementById(country).setAttribute('style', 'background-color: rgb(0, 8, 51); color: #EDF0F1')
        if(!selectedCountries.includes(country)){

            countries.push(country)
            setSelectedCountries(countries)
        }
    }

    const deleteCountry = (deletedCountry) => {
        let countries = selectedCountries.filter(country => country !== deletedCountry)
        setSelectedCountries(countries)
    }

    const createActivity = () => {
        let name = document.getElementById('activity-name').value
        let duration = document.getElementById('duration-time').value
        //difficulty
        let season = document.getElementById('season-dropdown').value
        //selectedcountries
        let countries = [1, 2, 2, 3, 4]
        if(dataValidation(name, duration, difficulty, season, selectedCountries)){
            console.log(typeof name, typeof duration, typeof difficulty, typeof season, typeof countries)
            postActivity({
                name,
                duration,
                difficulty,
                season,
                countries: selectedCountries
            })
        }
    }

    return(
        <div className="create">
            <Nav />
            <div className="grid-container">
                <div className="activity-form">
                    <div className="field" id="name">
                        <label htmlFor="activity-name">Activity name</label>
                        <input type="text" name="activity-name" id="activity-name" />
                    </div>
                    <div className="field" id="duration">
                        <label htmlFor="activity-duration">Duration</label>
                        <div className="time-picker">
                            <input type="text" placeholder="HH : MM" name="duration-time" id="duration-time" onChange={(e) => activityDurationFormat(e)} />
                            <label className="time-icon"></label>
                        </div>
                    </div>
                    <div className="field" id="difficulty">
                        <label htmlFor="activity-difficulty">Activity difficulty</label>
                        <div className="rating">
                            <input type="radio" name="star" id="star1" value={5} onChange={(e) => setDifficulty(e.target.value)} /><label htmlFor="star1" id="star-label"></label>
                            <input type="radio" name="star" id="star2" value={4} onChange={(e) => setDifficulty(e.target.value)} /><label htmlFor="star2" id="star-label"></label>
                            <input type="radio" name="star" id="star3" value={3} onChange={(e) => setDifficulty(e.target.value)} /><label htmlFor="star3" id="star-label"></label>
                            <input type="radio" name="star" id="star4" value={2} onChange={(e) => setDifficulty(e.target.value)} /><label htmlFor="star4" id="star-label"></label>
                            <input type="radio" name="star" id="star5" value={1} onChange={(e) => setDifficulty(e.target.value)} /><label htmlFor="star5" id="star-label"></label>
                        </div>
                    </div>
                    <div className="field" id="season">
                        <label htmlFor="activity-season">Season</label>
                        <select name="season" id="season-dropdown" placeholder="Pick">
                            <option disabled selected >- Pick one -</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumm">Autumm</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                    </div>
                    <div className="field" id="continent">
                        <label htmlFor="activity-continent">Continent</label>
                        <select name="continent" id="continent-dropdown" placeholder="Pick" onChange={e => handleContinentFilter(e.target.value)}>
                            <option disabled selected>- Pick one -</option>
                            <option value="America">America</option>
                            <option value="Europe">Europe</option>
                            <option value="Africa">Africa</option>
                            <option value="Asia">Asia</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                    <div className="field" id="country">
                        <label htmlFor="activity-country">Countries</label>
                        <select name="country" id="country-dropdown" placeholder="Pick" onChange={(e) => addCountry(e.target.value)}>
                            <option disabled>- Pick one -</option>
                            {
                                allCountries.map(country => {
                                    return(
                                        <option key={country.id} id={country.name}>{country.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="country-selection">
                        <p>Selected Countries</p>
                        <div className="selected-countries">
                            {
                                selectedCountries.length > 0?
                                selectedCountries.map(country => {
                                    return(
                                        <div className="selected-country" key={country}>
                                            <p>{country}</p>
                                            <p className="delete" onClick={() => deleteCountry(country)} value={country}>x</p>
                                        </div>
                                    )
                                }):
                                <p>No countries selected</p>
                            }
                        </div>

                    </div>
                    <div className="create-button">
                        <button onClick={() => createActivity()}>Create activity</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
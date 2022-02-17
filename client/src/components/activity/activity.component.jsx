import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './activity.css'

export default function Activity({activities}){
    const [filteredActivities, setFilteredActivities] = useState(activities)

    console.log(filteredActivities, 'initial state')
    const filterBySeason = async(e) =>{
        if(e.target.value === 'all'){
            setFilteredActivities(activities)
        }else{
            let filter = await activities.filter(activity => activity.season.toLowerCase() === e.target.value.toLowerCase())
            setFilteredActivities(filter)
        }
    }

    return(
        <div className="activities">
        <div className="activities-filter">
            <div className="activity-filter">
                <label htmlFor="season-filter">Filter by season: </label>
                <select name="season-filter" id="season-filter" onChange={e=>filterBySeason(e)}>
                    <option value="all">All</option>
                    <option value="summer">Summer</option>
                    <option value="autumm">Autumm</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                </select>
            </div>
            <div className="activity-filter">
                <label htmlFor="difficulty-filter">Filter by difficulty: </label>
                    <select name="difficulty-filter" id="difficulty-filter">
                        <option value="1">1 star</option>
                        <option value="2">2 stars</option>
                        <option value="3">3 stars</option>
                        <option value="4">4 stars</option>
                        <option value="5">5 stars</option>
                    </select>
            </div>
        </div>
        <div className="card-container">

        {
            filteredActivities && filteredActivities.map((activity) =>{
            let dif = activity.difficulty
            let stars = []

            for(let i=0; i < dif; i++){
                stars.push(i)
            }
            return(
                <div className="activity-card" key={activity.id}>
                    <h3>{activity.name}</h3>
                    <div className="stars-container">
                    {stars.map(s => <p id="stars"></p>)}
                    </div>
                    <p>{activity.duration}</p>
                    <p>{activity.season}</p>
                </div>
            )})
        }
            <Link to={'/activity/create'} style={{textDecoration: 'none'}}>
                <div className="add activity-card">
                        <div>+</div>
                </div>
            </Link>
        </div>
        </div>
    )
}
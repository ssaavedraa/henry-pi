import React from "react";
import { Link } from "react-router-dom";
import './activity.css'

export default function Activity({activities}){

    console.log(activities)

    return(
        <div className="activities">
        {
            activities && activities.map((activity) =>{
            let dif = activity.difficulty
            console.log(dif)
            let stars = []

            for(let i=0; i < dif; i++){
                stars.push(i)
            }
            return(
                <div className="activity-card" key={activity.name}>
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
    )
}
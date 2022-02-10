import React from "react";
import Nav from "../navbar/navbar.component";
import './create.css'

export default function Create(){

    function activityDurationFormat(e){
        let time = e.target.value
        const numbers=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


        for(let character in time){
            if(numbers.includes(time[character]) || time[character] === ':'){
                if(time.length <= 5 ){
                    if(time.length === 2){
                        e.target.value = time + ':'
                        console.log(time)
                    }
                    console.log(time)
                }
                else e.target.value = time.slice(0, -1)
            }
            else e.target.value = time.slice(0, -1)
        }
        return time
    }



    return(
        <div className="create">
            <Nav />
            <div className="grid-container">
                <div className="activity-form">
                    <div className="field" id="name">
                        <label htmlFor="activity-name">Activity name</label>
                        <input type="text" name="activity-name" id="activity-name" placeholder="" />
                    </div>
                    <div className="field" id="duration">
                        <label htmlFor="activity-duration">Duration</label>
                        <div className="time-picker">
                            <input type="text" placeholder="HH : MM" name="hours" id="hours" onChange={(e) => activityDurationFormat(e)} />
                            <label className="time-icon"></label>
                        </div>
                    </div>
                    <div className="field" id="difficulty">
                        <label htmlFor="activity-difficulty">Activity difficulty</label>
                        <div className="rating">
                            <input type="radio" name="star" id="star1" value={5} onChange={(e) => console.log(e.target.value)} /><label htmlFor="star1" id="star-label"></label>
                            <input type="radio" name="star" id="star2" value={4} onChange={(e) => console.log(e.target.value)} /><label htmlFor="star2" id="star-label"></label>
                            <input type="radio" name="star" id="star3" value={3} onChange={(e) => console.log(e.target.value)} /><label htmlFor="star3" id="star-label"></label>
                            <input type="radio" name="star" id="star4" value={2} onChange={(e) => console.log(e.target.value)} /><label htmlFor="star4" id="star-label"></label>
                            <input type="radio" name="star" id="star5" value={1} onChange={(e) => console.log(e.target.value)} /><label htmlFor="star5" id="star-label"></label>
                        </div>
                    </div>
                    <div className="field" id="season">
                        <label htmlFor="activity-season">Season</label>
                        <select name="season" id="season-dropdown" placeholder="Pick">
                            <option disabled selected>- Pick one -</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumm">Autumm</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                    </div>
                    <div className="create-button">
                        <button>Create activity</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
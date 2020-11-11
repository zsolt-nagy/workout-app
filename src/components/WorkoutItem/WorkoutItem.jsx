import React from 'react';
import './WorkoutItem.css';
import editSolid from "./edit-solid.svg";

export default function WorkoutItem(props) {
    return (
        <div className="workout-item">
            {props.exercise} ({props.reps})
            <img src={editSolid} 
                 alt="Edit workout" 
                 className="edit-workout" />
        </div>
    )
}

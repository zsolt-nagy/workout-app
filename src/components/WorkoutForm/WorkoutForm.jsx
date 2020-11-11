import React from 'react';
import './WorkoutForm.css';

export default function WorkoutForm(props) {
    const updateData = event => {
        event.preventDefault();
        const workout = document.querySelector('.js-workout-item').value;
        const reps = document.querySelector('.js-reps').value;
        document.querySelector('.js-workout-item').value = '';
        document.querySelector('.js-reps').value = ''; 
        props.handleAdd(workout, reps);
    }
    return (
        <form onSubmit={updateData}>
            <input type="text" 
                   name="workout-item" 
                   className="js-workout-item" 
                   placeholder="Enter workout item" />
            <input type="number" 
                   className="js-reps"
                   placeholder="reps" />
            <button type="submit">Add Workout Item</button>   
            <button onClick={props.handleClear}>
                Clear Workouts
            </button>
        </form>
    )
}

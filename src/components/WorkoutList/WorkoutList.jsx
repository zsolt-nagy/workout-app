import React from 'react';
import WorkoutItem from '../WorkoutItem/WorkoutItem';
import './WorkoutList.css';

export default function WorkoutList({ items, handleUpdate }) {
    const markup = items.map( item => 
        <WorkoutItem key={item.key} 
                     index={item.key}
                     exercise={item.exercise} 
                     reps={item.reps} 
                     handleUpdate={handleUpdate} />);

    return (
        <div className="workout-list-container">
            {markup}
        </div>
    )
}

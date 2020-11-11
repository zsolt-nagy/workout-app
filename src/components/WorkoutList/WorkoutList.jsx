import React from 'react';
import WorkoutItem from '../WorkoutItem/WorkoutItem';
import './WorkoutList.css';

export default function WorkoutList({ items }) {
    const markup = items.map( item => 
        <WorkoutItem key={item.key} 
                     exercise={item.exercise} 
                     reps={item.reps} />);

    return (
        <div className="workout-list-container">
            {markup}
        </div>
    )
}

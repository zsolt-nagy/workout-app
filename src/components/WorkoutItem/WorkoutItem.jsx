import React from 'react';
import './WorkoutItem.css';
import editSolid from "./edit-solid.svg";

export default function WorkoutItem(props) {
    const [isReadOnly, updateIsReadOnly] = React.useState(true);
    const [exercise, setExercise] = React.useState(props.exercise);
    const [reps, setReps] = React.useState(props.reps);
    const toggleReadOnly = () => {
        updateIsReadOnly( oldValue => !oldValue );
    }

    const handleExercise = (e) => {
        setExercise(e.currentTarget.value);
        props.handleUpdate(props.index, e.currentTarget.value, reps);
    }

    const handleReps = (e) => {
        setReps(e.currentTarget.value);
        props.handleUpdate(props.index, exercise, e.currentTarget.value);
    }    

    let exerciseContent = null;
    let repsContent = null;
    if (isReadOnly) {
        exerciseContent = exercise;
        repsContent = `(${reps})`;
    } else {
        exerciseContent = <input type="text" 
                                 value={exercise}
                                 onChange={handleExercise} />;
        repsContent = <input type="text" 
                             value={reps}
                             onChange={handleReps} />;
    }

    return (
        <div className="workout-item">
            {exerciseContent} {repsContent} 
            <img src={editSolid} 
                 alt="Edit workout" 
                 className="edit-workout"
                 onClick={toggleReadOnly} />
        </div>
    )
}

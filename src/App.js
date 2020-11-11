import './App.css';
import React, { useState } from 'react';
import WorkoutForm from './components/WorkoutForm/WorkoutForm';
import WorkoutList from './components/WorkoutList/WorkoutList';

function App() { 
  const [counter, setCounter] = useState(4);
  const [data, setData] = useState([
    { exercise: 'Sit ups', reps: 20, key: 0},
    { exercise: 'Bench press', reps: 12, key: 1}, 
    { exercise: 'Push ups', reps: 30, key: 2}, 
    { exercise: 'Burpees', reps: 20, key: 3} 
  ]);

  const handleClear = (event) => {
    event.preventDefault();
    setData([]);
  }

  const handleAdd = (exercise, reps) => {
    const key = counter; 
    setCounter(counter + 1);
    setData( oldData => [...oldData, {exercise, reps, key}]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Workout App</h2>
      </header>
      <WorkoutForm 
        handleClear={handleClear} 
        handleAdd={handleAdd} />
      <WorkoutList items={data} />
    </div>
  );
}

export default App;

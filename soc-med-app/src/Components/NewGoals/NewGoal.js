import React from 'react';
import './NewGoal.css';

const NewGoal = props => {
    const addGoalHandler = event => {
        //event parameter is an object that contains information about the event that triggered the function
        event.preventDefault();
        //preventDefault() is a method that is available on all event objects
        const newGoal = {
            id: 'cg4',
            text: 'My new goal!'
        }
        props.onAddGoal(newGoal);
    };
    return <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text"/>
        <button type="submit">Add Goal</button>
    </form>
};

export default NewGoal;
import React from "react";
import "./GoalList.css";

const GoalList = props => {
    console.log(props.goals);
    return (
        <ul className="goal-list">
            {props.goals.map((goal) => {
                return <li key={goal.id}>{goal.text}</li>;
                //Map every item in the array to a JSX element
                //because they're all objects, we can access the properties of each object
            })}

      </ul>  
    );
};

export default GoalList;
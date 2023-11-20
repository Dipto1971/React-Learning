import React, { useState } from "react";

import GoalList from "./Components/GoalList/GoalList";
import NewGoal from "./Components/NewGoals/NewGoal";

const App = () => {
  //usestate returns an array with 2 elements and the 2nd element is a function that allows us to update the state
  //the first element is the current state snapshot

  const [courseGoals, setcourseGoals] = useState(
    [
      {id:'cg1', text: 'Finish the course'},
      {id:'cg2', text: 'Learn all about the course topic'}, {id:'cg3', text: 'Help other students in the course Q&A'}
    ]
  );

  const addNewGoalHandler = (newGoal) => {
    setcourseGoals(courseGoals.concat(newGoal));
    //here concat returns a new array and not the old array and changes the state
    //this is how we can update the state in a functional component
  }

  return <div>
    <h2 className="course-goals">Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList goals= {courseGoals}/>
  </div>;
}

export default App;

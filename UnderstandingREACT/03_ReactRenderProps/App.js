import React from 'react';
import ClickCounter from './Components/ClickCounter';
import Counter from './Components/Counter';
import HoverCounter from './Components/HoverCounter';

function App() {
  return (
    <div className="App">
      <Counter 
          render= {(counter, incrementCount) =>(
          <ClickCounter counter={counter} incrementCount= {incrementCount}/>
          )}
      />
      {/* Here we used the render props pattern to pass the state and the incrementCount function to the ClickCounter component */}

      <Counter>
        {(counter, incrementCount) =>(
          <HoverCounter counter={counter} incrementCount= {incrementCount}/>
        )}
      </Counter>
      {/* Wrapped the HoverCounter component inside the Counter component */}
      {/* Here we used the children props pattern to pass the state and the incrementCount function to the HoverCounter component */}
    </div>
  );
}

export default App;
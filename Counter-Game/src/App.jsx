import React, { useState } from "react";
import { Card, Typography, Button } from "@mui/material";
import { createContext, useContext } from "react";

const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{
      count: count,
      setCount: setCount
    }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ padding: 20, width: 500, verticalAlign: "center" }}>
          <Typography variant="h5">Welcome to the counter game</Typography>
          <br />
          <Buttons />
          <br />
          <CountComponent />
        </Card>
      </div>
    </CountContext.Provider>
  );
}

function Buttons() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Increase />
      <Decrease />
    </div>
  );
}

function Increase() {
  const {count, setCount} = useContext(CountContext);
  return (
    <div>
      <Button variant={"contained"} onClick={() => setCount(count + 1)}>
        Increase counter
      </Button>
    </div>
  );
}

function Decrease() {
  const {count, setCount} = useContext(CountContext);
  return (
    <div>
      <Button variant={"contained"} onClick={() => setCount(count - 1)}>
        Decrease counter
      </Button>
    </div>
  );
}

function CountComponent() {
  const {count} = useContext(CountContext);
  return (
    <div>
      <Typography variant="h6" textAlign={"center"}>
        Current count: {count}
      </Typography>
    </div>
  );
}

export default App;

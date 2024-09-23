import React, { useState } from "react";
import { Card, Typography, Button } from "@mui/material";
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ padding: 20, width: 500, verticalAlign: "center" }}>
          <Typography variant="h5">Welcome to the counter game</Typography>
          <br />
          <Buttons />
          <br />
          <CountComponent />
        </Card>
      </div>
    </RecoilRoot>
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
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button variant={"contained"} onClick={() => {
        setCount((prevCount) => prevCount + 1);
        // Passing a function as an argument to setCount 
        // allows you to access the previous value of the state.
      }}>
        Increase counter
      </Button>
    </div>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button variant={"contained"} onClick={() => {
        setCount((prevCount) => prevCount - 1);
      }}>
        Decrease counter
      </Button>
    </div>
  );
}

function CountComponent() {
  const count = useRecoilValue(countState);

  return (
    <div>
      <Typography variant="h6" textAlign={"center"}>
        Current count: {count}
      </Typography>
    </div>
  );
}

export default App;

const countState = atom({
  key: "countState",
  default: 0,
});


// Using Recoil instead of Context or Prop drilling has following benefits:
// In Context API or Prop drilling, if a component is re-rendered, 
// all the components that are using the context or prop are also re-rendered.
// But in Recoil, only the components that are using the state are re-rendered.
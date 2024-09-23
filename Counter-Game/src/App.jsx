import React, { useState } from "react";
import { Card, Typography, Button } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ padding: 20, width: 500, verticalAlign: "center" }}>
        <Typography variant="h5">Welcome to the counter game</Typography>
        <br />
        <Buttons count={count} setCount={setCount} />
        <br />
        <CountComponent count={count} />
      </Card>
    </div>
  );
}

function Buttons({ count, setCount }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Increase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
    </div>
  );
}

function Increase({ count, setCount }) {
  return (
    <div>
      <Button variant={"contained"} onClick={() => setCount(count + 1)}>
        Increase counter
      </Button>
    </div>
  );
}

function Decrease({ count, setCount }) {
  return (
    <div>
      <Button variant={"contained"} onClick={() => setCount(count - 1)}>
        Decrease counter
      </Button>
    </div>
  );
}

function CountComponent({ count }) {
  return (
    <div>
      <Typography variant="h6" textAlign={"center"}>
        Current count: {count}
      </Typography>
    </div>
  );
}

export default App;

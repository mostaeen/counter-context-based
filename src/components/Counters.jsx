import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Badge, Button } from "react-bootstrap";
import CounterContext from "./context/CounterContext";
import Counter from "./Counter";

function Counters() {
  const { counters, resetAll } = useContext(CounterContext);

  return (
    <div>
      <Button onClick={resetAll} variant="warning">
        Reset All
      </Button>
      {counters.map((c) => (
        <Counter key={c.id} counter={c}>
          <Badge>Counter {c.id}</Badge>
        </Counter>
      ))}
    </div>
  );
}

export default Counters;

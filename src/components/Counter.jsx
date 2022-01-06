import React, { useContext } from "react";
import { Badge, Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import CounterContext from "./context/CounterContext";

function Counter({ counter }) {
  const { increase, decrease, remove } = useContext(CounterContext);
  return (
    <div>
      <Badge bg="primary" className="m-3"></Badge>
      <Badge bg="warning">{counter.value}</Badge>
      <Button onClick={() => increase(counter.id)} variant="secondary m-3">
        +
      </Button>
      <Button onClick={() => decrease(counter.id)} variant="secondary">
        -
      </Button>
      <Button onClick={() => remove(counter.id)} variant="danger m-3">
        <AiFillDelete />
      </Button>
    </div>
  );
}

export default Counter;
